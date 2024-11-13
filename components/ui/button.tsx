import * as React from 'react'; // Importing the React library for building components
import { Slot } from '@radix-ui/react-slot'; // Importing Slot from Radix UI for rendering components conditionally
import { cva, type VariantProps } from 'class-variance-authority'; // Importing cva for managing class variants and VariantProps type for TypeScript support

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name merging

// Defining button variants using cva for styling based on variant and size
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90', // Default button style
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90', // Style for destructive actions
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground', // Outline style
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80', // Secondary button style
        ghost: 'hover:bg-accent hover:text-accent-foreground', // Ghost button style
        link: 'text-primary underline-offset-4 hover:underline', // Link style
      },
      size: {
        default: 'h-10 px-4 py-2', // Default size
        sm: 'h-9 rounded-md px-3', // Small size
        lg: 'h-11 rounded-md px-8', // Large size
        icon: 'h-10 w-10', // Icon size
      },
    },
    defaultVariants: {
      variant: 'default', // Default variant if none is specified
      size: 'default', // Default size if none is specified
    },
  }
);

// Defining the ButtonProps interface to extend button attributes and variant props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Extending standard button attributes
    VariantProps<typeof buttonVariants> { // Extending variant props from buttonVariants
  asChild?: boolean; // Optional prop to render as a child component
}

// Button component definition using forwardRef to allow refs to be passed down
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'; // Determine the component to render based on asChild prop
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Merging class names based on variant and size
        ref={ref} // Forwarding ref to the chosen component
        {...props} // Spreading other props onto the component
      />
    );
  }
);
Button.displayName = 'Button'; // Setting display name for debugging

// Exporting the Button component and buttonVariants for use in other parts of the application
export { Button, buttonVariants };