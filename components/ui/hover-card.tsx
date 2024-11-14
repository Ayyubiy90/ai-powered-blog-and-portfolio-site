"use client"; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"; // Importing HoverCard components from Radix UI

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names

// Aliasing the HoverCard root component for easier access
const HoverCard = HoverCardPrimitive.Root;

// Aliasing the HoverCard trigger component for easier access
const HoverCardTrigger = HoverCardPrimitive.Trigger;

// Creating a HoverCardContent component that wraps the content of the hover card
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> // Props type for the component
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref} // Forwarding the ref to the underlying component
    align={align} // Setting the alignment of the hover card content
    sideOffset={sideOffset} // Setting the offset from the trigger element
    className={cn(
      // Applying conditional class names
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className // Merging with any additional class names passed as props
    )}
    {...props} // Spreading the rest of the props onto the HoverCardPrimitive.Content component
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName; // Setting display name for debugging

// Exporting the HoverCard components for use in other parts of the application
export { HoverCard, HoverCardTrigger, HoverCardContent };
