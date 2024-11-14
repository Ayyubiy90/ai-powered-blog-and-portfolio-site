"use client"; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import { Drawer as DrawerPrimitive } from "vaul"; // Importing Drawer components from the vaul library

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names

// Creating a Drawer component that wraps the DrawerPrimitive.Root
const Drawer = ({
  shouldScaleBackground = true, // Default prop to control background scaling
  ...props // Spreading the rest of the props onto the DrawerPrimitive.Root
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground} // Passing the shouldScaleBackground prop
    {...props} // Spreading the rest of the props
  />
);
Drawer.displayName = "Drawer"; // Setting display name for debugging

// Aliasing the Drawer components for easier access
const DrawerTrigger = DrawerPrimitive.Trigger; // Component that triggers the drawer
const DrawerPortal = DrawerPrimitive.Portal; // Portal for rendering the drawer
const DrawerClose = DrawerPrimitive.Close; // Component to close the drawer

// Creating a DrawerOverlay component for the overlay behind the drawer
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> // Type for the props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref} // Forwarding the ref to the Overlay
    className={cn("fixed inset-0 z-50 bg-black/80", className)} // Styles for the overlay
    {...props} // Spreading the rest of the props onto the Overlay
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName; // Setting display name for debugging

// Creating the main DrawerContent component for the drawer's content
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> // Type for the props
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    {" "}
    {/* Using a portal to render the content */}
    <DrawerOverlay /> {/* Rendering the overlay */}
    <DrawerPrimitive.Content
      ref={ref} // Forwarding the ref to the Content
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", // Styles for the Content
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the Content
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />{" "}
      {/* Decorative element for the drawer */}
      {children} // Rendering children inside the Content
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent"; // Setting display name for debugging

// Creating a DrawerHeader component for the header section of the drawer
const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} // Styles for the header
    {...props} // Spreading the rest of the props onto the header div
  />
);
DrawerHeader.displayName = "DrawerHeader"; // Setting display name for debugging

// Creating a DrawerFooter component for the footer section of the drawer
const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)} // Styles for the footer
    {...props} // Spreading the rest of the props onto the footer div
  />
);
DrawerFooter.displayName = "DrawerFooter"; // Setting display name for debugging

// Creating a DrawerTitle component for the title of the drawer
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> // Type for the props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref} // Forwarding the ref to the Title
    className={cn(
      "text-lg font-semibold leading-none tracking-tight", // Styles for the title
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Title
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName; // Setting display name for debugging

// Creating a DrawerDescription component for the description of the drawer
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> // Type for the props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref} // Forwarding the ref to the Description
    className={cn("text-sm text-muted-foreground", className)} // Styles for the description
    {...props} // Spreading the rest of the props onto the Description
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName; // Setting display name for debugging

// Exporting all the components for use in other parts of the application
export {
  Drawer, // Main Drawer component
  DrawerPortal, // Portal for rendering the drawer
  DrawerOverlay, // Overlay behind the drawer
  DrawerTrigger, // Trigger component for opening the drawer
  DrawerClose, // Component to close the drawer
  DrawerContent, // Content area of the drawer
  DrawerHeader, // Header section of the drawer
  DrawerFooter, // Footer section of the drawer
  DrawerTitle, // Title of the drawer
  DrawerDescription, // Description of the drawer
};
