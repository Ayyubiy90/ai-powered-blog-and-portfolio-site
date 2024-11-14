// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for creating components
import * as SelectPrimitive from '@radix-ui/react-select'; // Importing Radix UI's Select components for creating accessible select menus
import { Check, ChevronDown, ChevronUp } from 'lucide-react'; // Importing icons for the select component

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Aliasing the Root component of Radix UI's Select as Select
const Select = SelectPrimitive.Root;

// Aliasing the Group component of Radix UI's Select for grouping select items
const SelectGroup = SelectPrimitive.Group;

// Aliasing the Value component of Radix UI's Select for displaying the selected value
const SelectValue = SelectPrimitive.Value;

// Defining the SelectTrigger component using React.forwardRef for ref forwarding
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>, // Type for the ref, corresponding to the Trigger component of SelectPrimitive
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> // Props type for the SelectTrigger component, excluding ref
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger // The trigger element that opens the select menu
    ref={ref} // Forwarding the ref to the trigger component
    className={cn( // Applying conditional class names for styling
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    {children} // Rendering any child components passed to SelectTrigger
    <SelectPrimitive.Icon asChild> // Rendering the icon as a child of the trigger
      <ChevronDown className="h-4 w-4 opacity-50" /> // Downward chevron icon indicating the dropdown
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

// Setting the display name for the SelectTrigger component for better debugging
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// Defining the SelectScrollUpButton component using React.forwardRef for ref forwarding
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>, // Type for the ref, corresponding to the ScrollUpButton component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> // Props type for the SelectScrollUpButton component, excluding ref
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton // Button for scrolling up in the select menu
    ref={ref} // Forwarding the ref to the scroll up button
    className={cn( // Applying conditional class names for styling
      'flex cursor-default items-center justify-center py-1', // Base styles for the button
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    <ChevronUp className="h-4 w-4" /> // Upward chevron icon for scrolling up
  </SelectPrimitive.ScrollUpButton>
));

// Setting the display name for the SelectScrollUpButton component for better debugging
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

// Defining the SelectScrollDownButton component using React.forwardRef for ref forwarding
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>, // Type for the ref, corresponding to the ScrollDownButton component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> // Props type for the SelectScrollDownButton component, excluding ref
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton // Button for scrolling down in the select menu
    ref={ref} // Forwarding the ref to the scroll down button
    className={cn( // Applying conditional class names for styling
      'flex cursor-default items-center justify-center py-1', // Base styles for the button
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    <ChevronDown className="h-4 w-4" /> // Downward chevron icon for scrolling down
  </SelectPrimitive.ScrollDownButton ));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

// Defining the SelectContent component using React.forwardRef for ref forwarding
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>, // Type for the ref, corresponding to the Content component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> // Props type for the SelectContent component, excluding ref
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal> // Using a portal to render the content outside the normal DOM hierarchy
    <SelectPrimitive.Content
      ref={ref} // Forwarding the ref to the content component
      className={cn( // Applying conditional class names for styling
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' && // Conditional styling based on the position prop
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className // Allowing additional custom classes to be passed
      )}
      position={position} // Setting the position for the content
      {...props} // Spreading any additional props passed to the component
    >
      <SelectScrollUpButton /> // Including the scroll up button
      <SelectPrimitive.Viewport // Viewport for displaying the select items
        className={cn(
          'p-1', // Padding for the viewport
          position === 'popper' && // Conditional styling based on the position prop
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]' // Setting height and width based on trigger dimensions
        )}
      >
        {children} // Rendering any child components passed to SelectContent
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton /> // Including the scroll down button
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

// Setting the display name for the SelectContent component for better debugging
SelectContent.displayName = SelectPrimitive.Content.displayName;

// Defining the SelectLabel component using React.forwardRef for ref forwarding
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>, // Type for the ref, corresponding to the Label component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> // Props type for the SelectLabel component, excluding ref
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label // Label for the select component
    ref={ref} // Forwarding the ref to the label component
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} // Applying styles for the label
    {...props} // Spreading any additional props passed to the component
  />
));

// Setting the display name for the SelectLabel component for better debugging
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// Defining the SelectItem component using React.forwardRef for ref forwarding
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>, // Type for the ref, corresponding to the Item component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> // Props type for the SelectItem component, excluding ref
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item // Individual item in the select menu
    ref={ref} // Forwarding the ref to the item component
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Applying styles for the item
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"> // Container for the item indicator
      <SelectPrimitive.Item Indicator> // Indicator for the selected item
        <Check className="h-4 w-4" /> // Check icon indicating selection
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText> // Displaying the text of the item
  </SelectPrimitive.Item>
));

// Setting the display name for the SelectItem component for better debugging
SelectItem.displayName = SelectPrimitive.Item.displayName;

// Defining the SelectSeparator component using React.forwardRef for ref forwarding
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>, // Type for the ref, corresponding to the Separator component
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> // Props type for the SelectSeparator component, excluding ref
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator // Separator for visually dividing items in the select menu
    ref={ref} // Forwarding the ref to the separator component
    className={cn('-mx-1 my-1 h-px bg-muted', className)} // Applying styles for the separator
    {...props} // Spreading any additional props passed to the component
  />
));

// Setting the display name for the SelectSeparator component for better debugging
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// Exporting all the components for use in other parts of the application
export {
  Select, // Exporting the main Select component
  SelectGroup, // Exporting the SelectGroup component
  SelectValue, // Exporting the SelectValue component
  SelectTrigger, // Exporting the SelectTrigger component
  SelectContent, // Exporting the SelectContent component
  SelectLabel, // Exporting the SelectLabel component
  SelectItem, // Exporting the SelectItem component
  SelectSeparator, // Exporting the SelectSeparator component
  SelectScrollUpButton, // Exporting the SelectScrollUpButton component
  SelectScrollDownButton, // Exporting the SelectScrollDownButton component
};