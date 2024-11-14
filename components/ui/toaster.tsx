// Indicating that this file is a client component in a Next.js application
'use client';

// Importing the useToast hook for managing toast notifications
import { useToast } from '@/hooks/use-toast';
// Importing necessary components for displaying toasts
import {
  Toast, // Component for individual toast notifications
  ToastClose, // Component for the close button of the toast
  ToastDescription, // Component for the description text of the toast
  ToastProvider, // Provider component to manage toast context
  ToastTitle, // Component for the title text of the toast
  ToastViewport, // Component that defines the area where toasts are displayed
} from '@/components/ui/toast'; // Importing toast components from the UI library

// Defining the Toaster component
export function Toaster() {
  // Using the useToast hook to access the current toasts
  const { toasts } = useToast();

  return (
    // Wrapping the toasts in the ToastProvider to provide context
    <ToastProvider>
      {/* Mapping over the toasts array to render each toast */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          // Rendering a Toast component for each toast item
          <Toast key={id} {...props}> {/* Using the toast id as the key for React's reconciliation */}
            <div className="grid gap-1"> {/* Container for title and description with a grid layout */}
              {title && <ToastTitle>{title}</ToastTitle>} {/* Conditionally rendering the title if it exists */}
              {description && (
                <ToastDescription>{description}</ToastDescription> // Conditionally rendering the description if it exists
              )}
            </div>
            {action} {/* Rendering any action associated with the toast (e.g., buttons) */}
            <ToastClose /> {/* Rendering the close button for the toast */}
          </Toast>
        );
      })}
      <ToastViewport /> {/* Rendering the viewport for the toasts to be displayed */}
    </ToastProvider>
  );
}