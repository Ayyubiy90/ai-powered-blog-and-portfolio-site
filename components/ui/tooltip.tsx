// Indicating that this file is a client component in a Next.js application
'use client';

// Importing React library for building user interfaces
import * as React from 'react';
// Importing Tooltip components from Radix UI for creating tooltips
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// Importing utility function for conditional class names
import { cn } from '@/lib/utils';

// Defining TooltipProvider as the provider component from Radix UI's Tooltip
const TooltipProvider = TooltipPrimitive.Provider;

// Defining Tooltip as the root component from Radix UI's Tooltip
const Tooltip = TooltipPrimitive.Root;

// Defining TooltipTrigger as the trigger component from Radix UI's Tooltip
const TooltipTrigger = TooltipPrimitive.Trigger;

// Defining TooltipContent as a forward ref component for the tooltip content
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> // Props for the TooltipContent component
>(({ className, sideOffset = 4, ...props }, ref) => (
  // Rendering the TooltipPrimitive.Content component with forwarded ref
  <TooltipPrimitive.Content
    ref={ref} // Forwarding the ref to the content element
    sideOffset={sideOffset} // Setting the offset for the tooltip position
    className={cn(
      // Applying styles for the tooltip content with conditional class names
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className // Merging additional class names passed as props
    )}
    {...props} // Spreading any additional props onto the content element
  />
));

// Setting the display name for the TooltipContent component for better debugging
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Exporting the Tooltip, TooltipTrigger, TooltipContent, and TooltipProvider components for use in other parts of the application
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };