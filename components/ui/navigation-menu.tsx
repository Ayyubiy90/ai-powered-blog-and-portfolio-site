// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"; // Importing Radix UI's Navigation Menu components
import { cva } from "class-variance-authority"; // Importing a utility for managing class variants
import { ChevronDown } from "lucide-react"; // Importing a down chevron icon from Lucide React

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names

// Defining the main NavigationMenu component with ref forwarding
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> // Type for the props
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref} // Forwarding the ref to the root element
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center", // Base styles for the navigation menu
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  >
    {children} // Rendering child components inside the navigation menu
    <NavigationMenuViewport /> // Including the viewport for the navigation menu
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName; // Setting display name for debugging

// Defining the NavigationMenuList component with ref forwarding
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> // Type for the props
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref} // Forwarding the ref to the list element
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1", // Base styles for the list
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName; // Setting display name for debugging

// Aliasing NavigationMenuPrimitive.Item as NavigationMenuItem for easier usage
const NavigationMenuItem = NavigationMenuPrimitive.Item;

// Defining styles for the navigation menu trigger using class-variance-authority
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

// Defining the NavigationMenuTrigger component with ref forwarding
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> // Type for the props
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref} // Forwarding the ref to the trigger element
    className={cn(navigationMenuTriggerStyle(), "group", className)} // Applying styles and allowing additional classes
    {...props} // Spreading any additional props
  >
    {children} // Rendering children inside the trigger
    <ChevronDown // Rendering the down chevron icon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" // Applying styles and rotation on open state
      aria-hidden="true" // Hiding the icon from screen readers
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName; // Setting display name for debugging

// Defining the NavigationMenuContent component with ref forwarding
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> // Type for the props
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref} // Forwarding the ref to the content element
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", // Base styles for the content, including animations for entering and exiting
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName; // Setting display name for debugging

// Aliasing NavigationMenuPrimitive.Link as NavigationMenuLink for easier usage
const NavigationMenuLink = NavigationMenuPrimitive.Link;

// Defining the NavigationMenuViewport component with ref forwarding
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> // Type for the props
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    {" "}
    // Container for the viewport, positioned absolutely
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", // Base styles for the viewport, including animations and dimensions
        className // Allowing additional custom classes
      )}
      ref={ref} // Forwarding the ref to the viewport element
      {...props} // Spreading any additional props
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName; // Setting display name for debugging

// Defining the NavigationMenuIndicator component with ref forwarding
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> // Type for the props
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref} // Forwarding the ref to the indicator element
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", // Base styles for the indicator, including visibility animations
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />{" "}
    // Inner div for the indicator's visual representation
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName; // Setting display name for debugging

// Exporting all components and styles for use in other parts of the application
export {
  navigationMenuTriggerStyle, // Exporting the trigger style for use in other components
  NavigationMenu, // Exporting the main NavigationMenu component
  NavigationMenuList, // Exporting the NavigationMenuList component
  NavigationMenuItem, // Exporting the NavigationMenuItem component
  NavigationMenuContent, // Exporting the NavigationMenuContent component
  NavigationMenuTrigger, // Exporting the NavigationMenuTrigger component
  NavigationMenuLink, // Exporting the NavigationMenuLink component
  NavigationMenuIndicator, // Exporting the NavigationMenuIndicator component
  NavigationMenuViewport, // Exporting the NavigationMenuViewport component
};
