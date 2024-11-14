'use client'; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as DialogPrimitive from '@radix-ui/react-dialog'; // Importing Dialog components from Radix UI
import { X } from 'lucide-react'; // Importing the close icon from lucide-react

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class names

// Aliasing the Dialog components for easier access
const Dialog = DialogPrimitive.Root; // Main dialog component
const DialogTrigger = DialogPrimitive.Trigger; // Component that triggers the dialog
const DialogPortal = DialogPrimitive.Portal; // Portal for rendering the dialog
const DialogClose = DialogPrimitive.Close; // Component to close the dialog

// Creating a DialogOverlay component for the overlay behind the dialog
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> // Type for the props
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref} // Forwarding the ref to the Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', // Styles for the overlay
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Overlay
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName; // Setting display name for debugging

// Creating the main DialogContent component for the dialog's content
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> // Type for the props
>(({ className, children, ...props }, ref) => (
  <DialogPortal> {/* Using a portal to render the content */}
    <DialogOverlay /> {/* Rendering the overlay */}
    <DialogPrimitive.Content
      ref={ref} // Forwarding the ref to the Content
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', // Styles for the Content
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the Content
    >
      {children} // Rendering children inside the Content
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"> {/* Close button for the dialog */}
        <X className="h-4 w-4" /> {/* Close icon */}
        <span className="sr-only">Close</span> {/* Screen reader only text for accessibility */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName; // Setting display name for debugging

// Creating a DialogHeader component for the header section of the dialog
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left', // Styles for the header
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the header div
  />
);
DialogHeader.displayName = 'DialogHeader'; // Setting display name for debugging

// Creating a DialogFooter component for the footer section of the dialog
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', // Styles for the footer
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the footer div
  />
);
DialogFooter.displayName = 'DialogFooter'; // Setting display name for debugging

// Creating a DialogTitle component for the title of the dialog
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> // Type for the props
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref} // Forwarding the ref to the Title
    className={cn(
      'text-lg font-semibold leading-none tracking-tight', // Styles for the title
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Title
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName; // Setting display name for debugging

// Creating a DialogDescription component for the description of the dialog
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> // Type for the props
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref} // Forwarding the ref to the Description
    className={cn('text-sm text-muted-foreground', className)} // Styles for the description
    {...props} // Spreading the rest of the props onto the Description
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName; // Setting display name for debugging

// Exporting all the components for use in other parts of the application
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};