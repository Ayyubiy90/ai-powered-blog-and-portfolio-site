// Indicates that this file is a client-side component in a Next.js application
"use client";

import * as React from "react"; // Importing React library
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"; // Importing Alert Dialog components from Radix UI

import { cn } from "@/lib/utils"; // Importing a utility function for class name manipulation
import { buttonVariants } from "@/components/ui/button"; // Importing button variants for styling buttons

// Defining the main AlertDialog component using Radix UI's AlertDialog root
const AlertDialog = AlertDialogPrimitive.Root;

// Defining the AlertDialogTrigger component for triggering the alert dialog
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

// Defining the AlertDialogPortal component for rendering the dialog in a portal
const AlertDialogPortal = AlertDialogPrimitive.Portal;

// Creating a forwardRef component for AlertDialogOverlay
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Styling for the overlay with animations based on state
      className // Additional class names
    )}
    {...props} // Spreading the rest of the props
    ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Overlay
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName; // Setting display name for debugging

// Creating a forwardRef component for AlertDialogContent
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    {" "}
    // Using the AlertDialogPortal to render the content
    <AlertDialogOverlay /> // Rendering the overlay
    <AlertDialogPrimitive.Content
      ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Content
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", // Styling for the content with animations based on state
        className // Additional class names
      )}
      {...props} // Spreading the rest of the props
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName; // Setting display name for debugging

// Creating a functional component for AlertDialogHeader
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left", // Styling for the header with responsive alignment
      className // Additional class names
    )}
    {...props} // Spreading the rest of the props
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader"; // Setting display name for debugging

// Creating a functional component for AlertDialogFooter
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", // Styling for the footer with responsive layout
      className // Additional class names
    )}
    {...props} // Spreading the rest of the props
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter"; // Setting display name for debugging

// Creating a forwardRef component for AlertDialogTitle
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Title
    className={cn("text-lg font-semibold", className)} // Styling for the title
    {...props} // Spreading the rest of the props
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName; // Setting display name for debugging

// Creating a forwardRef component for AlertDialogDescription
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)} // Styling for the description
    {...props} // Spreading the rest of the props
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName; // Setting display name for debugging

// Creating a forwardRef component for AlertDialogAction
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Action
    className={cn(buttonVariants(), className)} // Applying button styles
    {...props} // Spreading the rest of the props
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName; // Setting display name for debugging

// Creating a forwardRef component for AlertDialogCancel
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> // Props type for the component
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref} // Forwarding the ref to the AlertDialogPrimitive.Cancel
    className={cn(
      buttonVariants({ variant: "outline" }), // Applying outlined button styles
      "mt-2 sm:mt-0", // Margin adjustments for responsive design
      className // Additional class names
    )}
    {...props} // Spreading the rest of the props
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName; // Setting display name for debugging

// Exporting all components for use in other parts of the application
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
