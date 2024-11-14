// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as ProgressPrimitive from '@radix-ui/react-progress'; // Importing Radix UI's Progress components for creating progress indicators

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the Progress component with ref forwarding
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>, // Type for the ref, indicating it will refer to the ProgressPrimitive.Root element
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> // Type for the props, extending the properties of ProgressPrimitive.Root without the ref
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root // The root component for the progress indicator
    ref={ref} // Forwarding the ref to the ProgressPrimitive.Root element
    className={cn( // Applying conditional class names for styling
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary', // Base styles for the progress bar
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    <ProgressPrimitive.Indicator // The indicator that visually represents the progress
      className="h-full w-full flex-1 bg-primary transition-all" // Styles for the indicator, making it fill the height and width of the root
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} // Dynamically adjusting the position of the indicator based on the value prop
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName; // Setting display name for debugging purposes

// Exporting the Progress component for use in other parts of the application
export { Progress };