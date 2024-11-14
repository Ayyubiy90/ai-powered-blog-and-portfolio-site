// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for creating components
import * as SeparatorPrimitive from '@radix-ui/react-separator'; // Importing Radix UI's Separator component for creating accessible separators

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the Separator component using React.forwardRef for ref forwarding
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>, // Type for the ref, corresponding to the Root component of SeparatorPrimitive
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> // Props type for the Separator component, excluding ref
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props }, // Destructuring props with default values
    ref // Ref forwarded to the component
  ) => (
    <SeparatorPrimitive.Root // The root element of the separator
      ref={ref} // Forwarding the ref to the root component
      decorative={decorative} // Setting the decorative prop to indicate if the separator is purely decorative
      orientation={orientation} // Setting the orientation of the separator (horizontal or vertical)
      className={cn( // Applying conditional class names for styling
        'shrink-0 bg-border', // Base styles for the separator
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', // Conditional styles based on orientation
        className // Allowing additional custom classes to be passed
      )}
      {...props} // Spreading any additional props passed to the component
    />
  )
);

// Setting the display name for the Separator component for better debugging
Separator.displayName = SeparatorPrimitive.Root.displayName;

// Exporting the Separator component for use in other parts of the application
export { Separator };