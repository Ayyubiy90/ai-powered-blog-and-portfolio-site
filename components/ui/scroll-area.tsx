// Indicating that this component is a client component in a Next.js application
"use client";

// Importing necessary libraries and components
import * as React from "react"; // Importing React for creating components
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"; // Importing Radix UI's Scroll Area components for creating scrollable areas

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name management

// Defining the ScrollArea component using React.forwardRef for ref forwarding
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>, // Type for the ref, corresponding to the Root component of ScrollAreaPrimitive
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> // Props type for the ScrollArea component, excluding ref
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root // The root component for the scroll area
    ref={ref} // Forwarding the ref to the root component
    className={cn("relative overflow-hidden", className)} // Applying conditional class names for styling
    {...props} // Spreading any additional props passed to the component
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {" "}
      // The viewport for displaying scrollable content
      {children} // Rendering any child components passed to ScrollArea
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar /> // Including the ScrollBar component for scrolling
    functionality
    <ScrollAreaPrimitive.Corner /> // Adding a corner element for styling
    purposes
  </ScrollAreaPrimitive.Root>
));

// Setting the display name for the ScrollArea component for better debugging
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

// Defining the ScrollBar component using React.forwardRef for ref forwarding
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, // Type for the ref, corresponding to the ScrollAreaScrollbar component
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> // Props type for the ScrollBar component, excluding ref
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar // The scrollbar component for the scroll area
    ref={ref} // Forwarding the ref to the scrollbar component
    orientation={orientation} // Setting the orientation of the scrollbar (vertical or horizontal)
    className={cn(
      // Applying conditional class names for styling
      "flex touch-none select-none transition-colors", // Base styles for the scrollbar
      orientation === "vertical" && // Conditional styles for vertical orientation
        "h-full w-2.5 border-l border-l-transparent p-[1px]", // Styles for vertical scrollbar
      orientation === "horizontal" && // Conditional styles for horizontal orientation
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", // Styles for horizontal scrollbar
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />{" "}
    // The draggable thumb of the scrollbar
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

// Setting the display name for the ScrollBar component for better debugging
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// Exporting the ScrollArea and ScrollBar components for use in other parts of the application
export { ScrollArea, ScrollBar };
