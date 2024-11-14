// Indicating that this file is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as LabelPrimitive from '@radix-ui/react-label'; // Importing Radix UI's Label component
import { cva, type VariantProps } from 'class-variance-authority'; // Importing utility for managing class variants

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining variants for the label styles using class-variance-authority
const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

// Creating a Label component using React.forwardRef to allow ref forwarding
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // Type for the ref, pointing to the Radix Label component
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & // Props type for the component, extending Radix Label props
    VariantProps<typeof labelVariants> // Adding variant props for styling
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root // Using the Radix Label component as the base
    ref={ref} // Forwarding the ref to the underlying Label component
    className={cn(labelVariants(), className)} // Combining the variant classes with any additional classes passed in
    {...props} // Spreading the rest of the props onto the Label component
  />
));

// Setting the display name for the Label component for better debugging
Label.displayName = LabelPrimitive.Root.displayName;

// Exporting the Label component for use in other parts of the application
export { Label };