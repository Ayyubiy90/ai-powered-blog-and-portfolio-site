// Indicating that this file is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building UI components
import * as ToastPrimitives from '@radix-ui/react-toast'; // Importing Radix UI toast primitives for creating toast notifications
import { cva, type VariantProps } from 'class-variance-authority'; // Importing utility for managing class variants
import { X } from 'lucide-react'; // Importing the X icon from Lucide for close button

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the ToastProvider component from Radix UI
const ToastProvider = ToastPrimitives.Provider;

// Creating a ToastViewport component using React's forwardRef
// This component serves as the container for the toast notifications
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> // Props for the Viewport component
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref} // Attaching the ref to the Viewport
    className={cn(
      // Applying styles to the viewport for positioning and layout
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Viewport
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName; // Setting display name for debugging

// Defining toast variants using class-variance-authority
const toastVariants = cva(
  // Base styles for the toast notifications
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      // Defining variants for the toast component
      variant: {
        default: 'border bg-background text-foreground', // Default variant styles
        destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground', // Destructive variant styles
      },
    },
    defaultVariants: {
      variant: 'default', // Setting the default variant to 'default'
    },
  }
);

// Creating the Toast component using React's forwardRef
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & // Props for the Root component
    VariantProps<typeof toastVariants> // Including variant props
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref} // Attaching the ref to the Root component
      className={cn(toastVariants({ variant }), className)} // Applying variant styles and additional classes
      {...props} // Spreading any additional props onto the Root component
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName; // Setting display name for debugging

// Creating the ToastAction component using React's forwardRef
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> // Props for the Action component
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref} // Attaching the ref to the Action component
    className={cn(
      // Applying styles for the action button
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[ .destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Action component
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName; // Setting display name for debugging

// Creating the ToastClose component using React's forwardRef
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> // Props for the Close component
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref} // Attaching the ref to the Close component
    className={cn(
      // Applying styles for the close button
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className // Allowing additional classes to be passed in
    )}
    toast-close="" // Custom attribute for identifying the close action
    {...props} // Spreading any additional props onto the Close component
  >
    <X className="h-4 w-4" /> // Rendering the close icon
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName; // Setting display name for debugging

// Creating the ToastTitle component using React's forwardRef
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> // Props for the Title component
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref} // Attaching the ref to the Title component
    className={cn('text-sm font-semibold', className)} // Applying styles for the title
    {...props} // Spreading any additional props onto the Title component
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName; // Setting display name for debugging

// Creating the ToastDescription component using React's forwardRef
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> // Props for the Description component
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref} // Attaching the ref to the Description component
    className={cn('text-sm opacity-90', className)} // Applying styles for the description
    {...props} // Spreading any additional props onto the Description component
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName; // Setting display name for debugging

// Defining types for the Toast component props
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

// Defining type for the ToastAction element
type ToastActionElement = React.ReactElement<typeof ToastAction>;

// Exporting the components and types for use in other parts of the application
export {
  type ToastProps, // Exporting the ToastProps type
  type ToastActionElement, // Exporting the ToastActionElement type
  ToastProvider, // Exporting the ToastProvider component
  ToastViewport, // Exporting the ToastViewport component
  Toast, // Exporting the Toast component
  ToastTitle, // Exporting the ToastTitle component
  ToastDescription, // Exporting the ToastDescription component
  ToastClose, // Exporting the ToastClose component
  ToastAction, // Exporting the ToastAction component
};