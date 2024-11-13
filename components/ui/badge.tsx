import * as React from 'react'; // Importing the React library for building components
import { cva, type VariantProps } from 'class-variance-authority'; // Importing cva for managing class variants and VariantProps type for type safety

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name merging

// Defining badge variants using cva
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', // Base styles for the badge
  {
    variants: {
      variant: { // Defining different variants for the badge
        default: // Default variant styles
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: // Secondary variant styles
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: // Destructive variant styles (for alerts or warnings)
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: // Outline variant styles
          'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default', // Setting the default variant to 'default'
    },
  }
);

// Defining the BadgeProps interface that extends HTMLDivElement attributes and badge variant props
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, // Allowing all standard div attributes
    VariantProps<typeof badgeVariants> {} // Including variant props from badgeVariants

// Badge component definition
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} /> // Merging class names and applying props to the div
  );
}

// Exporting the Badge component and badgeVariants for use in other parts of the application
export { Badge, badgeVariants };