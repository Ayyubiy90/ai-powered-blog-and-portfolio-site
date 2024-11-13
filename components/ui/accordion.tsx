// Indicates that this file is a client-side component in a Next.js application
"use client";

import * as React from "react"; // Importing React library
import * as AccordionPrimitive from "@radix-ui/react-accordion"; // Importing Accordion components from Radix UI
import { ChevronDown } from "lucide-react"; // Importing the ChevronDown icon from lucide-react

import { cn } from "@/lib/utils"; // Importing a utility function for class name manipulation

// Defining the main Accordion component using Radix UI's Accordion root
const Accordion = AccordionPrimitive.Root;

// Creating a forwardRef component for AccordionItem
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> // Props type for the component
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref} // Forwarding the ref to the AccordionPrimitive.Item
    className={cn("border-b", className)} // Applying border and any additional class names
    {...props} // Spreading the rest of the props
  />
));
AccordionItem.displayName = "AccordionItem"; // Setting display name for debugging

// Creating a forwardRef component for AccordionTrigger
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> // Props type for the component
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    {" "}
    // Header for the accordion item
    <AccordionPrimitive.Trigger
      ref={ref} // Forwarding the ref to the AccordionPrimitive.Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", // Styling for the trigger
        className // Additional class names
      )}
      {...props} // Spreading the rest of the props
    >
      {children} // Rendering the children inside the trigger
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />{" "}
      // Chevron icon with transition effects
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName; // Setting display name for debugging

// Creating a forwardRef component for AccordionContent
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> // Props type for the component
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref} // Forwarding the ref to the AccordionPrimitive.Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" // Styling for the content with animations
    {...props} // Spreading the rest of the props
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div> // Rendering
    children with padding
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName; // Setting display name for debugging

// Exporting the Accordion components for use in other parts of the application
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
