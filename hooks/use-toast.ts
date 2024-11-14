// Indicating that this component is a client component in Next.js
'use client';

// Importing React library for building user interfaces
import * as React from 'react';

// Importing types for ToastActionElement and ToastProps from a local toast component
import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

// Constants defining the maximum number of toasts and the delay before a toast is removed
const TOAST_LIMIT = 1; // Maximum number of toasts to display at once
const TOAST_REMOVE_DELAY = 1000000; // Delay before a toast is removed (in milliseconds)

// Defining the structure of a toast object, extending ToastProps
type ToasterToast = ToastProps & {
  id: string; // Unique identifier for the toast
  title?: React.ReactNode; // Optional title for the toast
  description?: React.ReactNode; // Optional description for the toast
  action?: ToastActionElement; // Optional action element for the toast
};

// Defining action types for managing toasts
const actionTypes = {
  ADD_TOAST: 'ADD_TOAST', // Action type for adding a toast
  UPDATE_TOAST: 'UPDATE_TOAST', // Action type for updating a toast
  DISMISS_TOAST: 'DISMISS_TOAST', // Action type for dismissing a toast
  REMOVE_TOAST: 'REMOVE_TOAST', // Action type for removing a toast
} as const; // 'as const' ensures that the object is treated as a constant

// Counter to generate unique toast IDs
let count = 0;

// Function to generate a unique ID for each toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER; // Increment count and wrap around if it exceeds MAX_SAFE_INTEGER
  return count.toString(); // Return the count as a string
}

// Type definition for action types
type ActionType = typeof actionTypes;

// Defining the structure of actions that can be dispatched
type Action =
  | {
      type: ActionType['ADD_TOAST']; // Action to add a toast
      toast: ToasterToast; // The toast to be added
    }
  | {
      type: ActionType['UPDATE_TOAST']; // Action to update a toast
      toast: Partial<ToasterToast>; // Partial toast object to update
    }
  | {
      type: ActionType['DISMISS_TOAST']; // Action to dismiss a toast
      toastId?: ToasterToast['id']; // Optional ID of the toast to dismiss
    }
  | {
      type: ActionType['REMOVE_TOAST']; // Action to remove a toast
      toastId?: ToasterToast['id']; // Optional ID of the toast to remove
    };

// Interface defining the state structure for the toast system
interface State {
  toasts: ToasterToast[]; // Array of current toasts
}

// Map to keep track of toast timeouts for removal
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// Function to add a toast to the removal queue
const addToRemoveQueue = (toastId: string) => {
  // If the toast ID is already in the queue, do nothing
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // Set a timeout to remove the toast after the specified delay
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId); // Remove the toast ID from the map
    dispatch({
      type: 'REMOVE_TOAST', // Dispatch a remove action
      toastId: toastId, // Pass the toast ID
    });
  }, TOAST_REMOVE_DELAY); // Delay before removal

  // Store the timeout in the map with the toast ID as the key
  toastTimeouts.set(toastId, timeout);
};

// Reducer function to manage the state of toasts
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      // Add a new toast to the state, ensuring the limit is respected
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT), // Add new toast and limit the number of toasts
      };

    case 'UPDATE_TOAST':
      // Update an existing toast in the state
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t // Update the toast if IDs match
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action; // Extract the toast ID from the action

      // Side effects: add the toast to the removal queue
      if (toastId) {
        addToRemoveQueue(toastId); // Add specific toast to the removal queue
      } else {
        // If no specific toast ID is provided, dismiss all toasts
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id); // Add each toast to the removal queue
        });
      }

      // Update the state to mark the toast(s) as closed
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false, // Mark the toast as closed
              }
            : t // Keep other toasts unchanged
        ),
      };
    }
    case 'REMOVE_TOAST':
      // If no toast ID is provided, clear all toasts
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [], // Clear all toasts from the state
        };
      }
      // Remove the specific toast from the state
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId), // Filter out the toast with the given ID
      };
  }
};

// Array to hold listeners that will be notified of state changes
const listeners: Array<(state: State) => void> = [];

// Initial state of the toast system
let memoryState: State = { toasts: [] };

// Dispatch function to update the state and notify listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action); // Update the state using the reducer
  listeners.forEach((listener) => {
    listener(memoryState); // Notify each listener of the new state
  });
}

// Type definition for a toast without the ID
type Toast = Omit<ToasterToast, 'id'>;

// Function to create a new toast
function toast({ ...props }: Toast) {
  const id = genId(); // Generate a unique ID for the new toast

  // Function to update the toast with new properties
  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST', // Dispatch an update action
      toast: { ...props, id }, // Include the new properties and the ID
    });

  // Function to dismiss the toast
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id }); // Dispatch a dismiss action with the toast ID

  // Dispatch an action to add the new toast to the state
  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id, // Include the generated ID
      open: true, // Mark the toast as open
      onOpenChange: (open) => {
        if (!open) dismiss(); // Dismiss the toast if it is closed
      },
    },
  });

  // Return an object containing the toast ID and functions to dismiss and update the toast
  return {
    id: id,
    dismiss,
    update,
  };
}

// Custom hook to use the toast system in components
function useToast() {
  const [state, setState] = React.useState<State>(memoryState); // Initialize state with the current memory state

  // Effect to manage listeners for state updates
  React.useEffect(() => {
    listeners.push(setState); // Add the current setState function to the listeners
    return () => {
      const index = listeners.indexOf(setState); // Find the index of the current listener
      if (index > -1) {
        listeners.splice(index, 1); // Remove the listener when the component unmounts
      }
    };
  }, [state]);

  // Return the current state and the toast functions
  return {
    ...state,
    toast, // Include the toast function
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }), // Include a dismiss function
  };
}

// Exporting the useToast hook and toast function for use in other components
export { useToast, toast };