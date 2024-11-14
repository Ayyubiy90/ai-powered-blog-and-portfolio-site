// Indicating that this component is a client component in a Next.js application
"use client";

// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import * as PopoverPrimitive from "@radix-ui/react-popover"; // Importing Radix UI's Popover components for creating popover functionality

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name management

// Assigning the Root component of the PopoverPrimitive to a variable for easier access
const Popover = PopoverPrimitive.Root; // The main popover component that manages its open/closed state

// Assigning the Trigger component of the PopoverPrimitive to a variable for easier access
const PopoverTrigger = PopoverPrimitive.Trigger; // The component that triggers the popover to open

// Defining the PopoverContent component with ref forwarding
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>, // Type for the ref, indicating it will refer to the PopoverPrimitive.Content element
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> // Type for the props, extending the properties of PopoverPrimitive.Content without the ref
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    {" "}
    // Using a portal to render the popover content outside of its parent
    hierarchy
    <PopoverPrimitive.Content
      ref={ref} // Forwarding the ref to the PopoverPrimitive.Content element
      align={align} // Setting the alignment of the popover content (default is 'center')
      sideOffset={sideOffset} // Setting the offset from the trigger element (default is 4)
      className={cn(
        // Applying conditional class names for styling
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none " + // Base styles for the popover content
          "data-[state=open]:animate-in data-[state=closed]:animate-out " + // Animation classes for open/closed states
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " + // Fade animations for visibility
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " + // Zoom animations for visibility
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " + // Slide animations based on the side the popover is positioned
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className // Allowing additional custom classes to be passed
      )}
      {...props} // Spreading any additional props passed to the component
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName; // Setting display name for debugging purposes

// Exporting the Popover, PopoverTrigger, and PopoverContent components for use in other parts of the application
export { Popover, PopoverTrigger, PopoverContent };
