// Indicating that this component is a client component in a Next.js application
'use client';

// Importing React and necessary primitives from Radix UI for creating a switch component
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

// Importing a utility function for conditional class name management
import { cn } from '@/lib/utils';

// Creating a Switch component using React's forwardRef to allow parent components to access the underlying DOM element
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>, // Type for the ref, corresponding to the Root component of Radix UI's Switch
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> // Type for the props, excluding ref
>(({ className, ...props }, ref) => (
  // Rendering the Root component of Radix UI's Switch
  <SwitchPrimitives.Root
    className={cn(
      // Applying base styles and conditional classes for the switch
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Root component
    ref={ref} // Attaching the ref to the Root component
  >
    {/* Rendering the Thumb component of Radix UI's Switch */}
    <SwitchPrimitives.Thumb
      className={cn(
        // Applying styles for the thumb of the switch
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));

// Setting the display name for the Switch component for better debugging
Switch.displayName = SwitchPrimitives.Root.displayName;

// Exporting the Switch component for use in other parts of the application
export { Switch };