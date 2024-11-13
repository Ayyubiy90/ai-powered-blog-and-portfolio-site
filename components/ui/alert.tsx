import * as React from "react"; // Importing React library
import { cva, type VariantProps } from "class-variance-authority"; // Importing cva for class variance and VariantProps type

import { cn } from "@/lib/utils"; // Importing a utility function for class name manipulation

// Defining alert variants using cva for styling based on different variants
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", // Base styles for the alert
  {
    variants: {
      variant: {
        default: "bg-background text-foreground", // Default variant styles
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", // Styles for destructive variant
      },
    },
    defaultVariants: {
      variant: "default", // Setting the default variant to 'default'
    },
  }
);

// Creating a forwardRef component for Alert
const Alert = React.forwardRef<
  HTMLDivElement, // Type for the ref
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> // Props type for the component, including variant props
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    role="alert" // Setting the role for accessibility
    className={cn(alertVariants({ variant }), className)} // Applying the alert styles based on the variant and any additional class names
    {...props} // Spreading the rest of the props
  />
));
Alert.displayName = "Alert"; // Setting display name for debugging

// Creating a forwardRef component for AlertTitle
const AlertTitle = React.forwardRef<
  HTMLParagraphElement, // Type for the ref
  React.HTMLAttributes<HTMLHeadingElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <h5
    ref={ref} // Forwarding the ref to the h5 element
    className={cn("mb-1 font-medium leading-none tracking-tight", className)} // Styling for the title
    {...props} // Spreading the rest of the props
  />
));
AlertTitle.displayName = "AlertTitle"; // Setting display name for debugging

// Creating a forwardRef component for AlertDescription
const AlertDescription = React.forwardRef<
  HTMLParagraphElement, // Type for the ref
  React.HTMLAttributes<HTMLParagraphElement> // Props type for the component
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    className={cn("text-sm [&_p]:leading-relaxed", className)} // Styling for the description
    {...props} // Spreading the rest of the props
  />
));
AlertDescription.displayName = "AlertDescription"; // Setting display name for debugging

// Exporting the Alert, AlertTitle, and AlertDescription components for use in other parts of the application
export { Alert, AlertTitle, AlertDescription };
