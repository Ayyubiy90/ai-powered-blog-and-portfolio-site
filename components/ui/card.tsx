import * as React from 'react'; // Importing the React library for building components

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name merging

// Card component definition using React.forwardRef to allow ref forwarding
const Card = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm', // Base styles for the card
      className // Merging any additional class names passed as props
    )}
    {...props} // Spreading any additional props onto the div
  />
));
Card.displayName = 'Card'; // Setting a display name for better debugging

// CardHeader component definition, also using React.forwardRef
const CardHeader = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    className={cn('flex flex-col space-y-1.5 p-6', className)} // Base styles for the card header
    {...props} // Spreading any additional props onto the div
  />
));
CardHeader.displayName = 'CardHeader'; // Setting a display name for better debugging

// CardTitle component definition, also using React.forwardRef
const CardTitle = React.forwardRef<
  HTMLParagraphElement, // Type of the ref (HTMLParagraphElement)
  React.HTMLAttributes<HTMLHeadingElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <h3
    ref={ref} // Forwarding the ref to the h3 element
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight', // Base styles for the card title
      className // Merging any additional class names passed as props
    )}
    {...props} // Spreading any additional props onto the h3
  />
));
CardTitle.displayName = 'CardTitle'; // Setting a display name for better debugging

// CardDescription component definition, also using React.forwardRef
const CardDescription = React.forwardRef<
  HTMLParagraphElement, // Type of the ref (HTMLParagraphElement)
  React.HTMLAttributes<HTMLParagraphElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <p
    ref={ref} // Forwarding the ref to the p element
    className={cn('text-sm text-muted-foreground', className)} // Base styles for the card description
    {...props} // Spreading any additional props onto the p
  />
));
CardDescription.displayName = 'CardDescription'; // Setting a display name for better debugging

// CardContent component definition, also using React.forwardRef
const CardContent = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} /> // Base styles for the card content
));
CardContent.displayName = 'CardContent'; // Setting a display name for better debugging

// CardFooter component definition, also using React.forwardRef
const CardFooter = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    className={cn('flex items-center p-6 pt-0', className)} // Base styles for the card footer
    {...props} // Spreading any additional props onto the div
  />
));
CardFooter.displayName = 'CardFooter'; // Setting a display name for better debugging

// Exporting all card-related components for use in other parts of the application
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};