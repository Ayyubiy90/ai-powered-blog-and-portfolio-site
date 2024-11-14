"use client"; // Indicates that this component is a client component in Next.js

import * as React from "react"; // Importing the React library for building components
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // Importing the Checkbox component from Radix UI
import { Check } from "lucide-react"; // Importing the Check icon from Lucide React

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name merging

// Checkbox component definition using React.forwardRef
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>, // Type of the ref (ElementRef of CheckboxPrimitive.Root)
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> // Props type for the component, excluding ref
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref} // Ref for the root checkbox element
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className // Merging additional class names
    )}
    {...props} // Spreading other props onto the CheckboxPrimitive.Root
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")} // Styling for the checkbox indicator
    >
      <Check className="h-4 w-4" /> {/* Rendering the Check icon */}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName; // Setting display name for debugging

export { Checkbox }; // Exporting the Checkbox component for use in other parts of the application
