// Indicating that this file is a client component in a Next.js application
'use client';

// Importing React library for building user interfaces
import * as React from 'react';
// Importing Toggle component from Radix UI for creating toggle buttons
import * as TogglePrimitive from '@radix-ui/react-toggle';
// Importing cva (class variance authority) for managing class variants and type definitions
import { cva, type VariantProps } from 'class-variance-authority';

// Importing utility function for conditional class names
import { cn } from '@/lib/utils';

// Defining toggle variants using cva for styling based on variant and size
const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  {
    // Defining variants for the toggle button
    variants: {
      variant: {
        default: 'bg-transparent', // Default variant with transparent background
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground', // Outline variant with border
      },
      size: {
        default: 'h-10 px-3', // Default size with specific height and padding
        sm: 'h-9 px-2.5', // Small size with adjusted height and padding
        lg: 'h-11 px-5', // Large size with increased height and padding
      },
    },
    // Setting default variants for the toggle button
    defaultVariants: {
      variant: 'default', // Default variant
      size: 'default', // Default size
    },
  }
);

// Defining the Toggle component
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & // Props for the Toggle component
    VariantProps<typeof toggleVariants> // Additional variant props
>(({ className, variant, size, ...props }, ref) => (
  // Rendering the root of the Toggle using Radix UI's Root component
  <TogglePrimitive.Root
    ref={ref} // Forwarding the ref to the root element
    className={cn(toggleVariants({ variant, size, className }))} // Applying styles based on variant and size
    {...props} // Spreading any additional props onto the root element
  />
));

// Setting the display name for the Toggle component for better debugging
Toggle.displayName = TogglePrimitive.Root.displayName;

// Exporting the Toggle component and toggleVariants for use in other parts of the application
export { Toggle, toggleVariants };