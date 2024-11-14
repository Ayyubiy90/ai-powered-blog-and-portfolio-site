// Indicating that this component is a client component in a Next.js application
'use client';

// Importing React and necessary components from Radix UI's Slider package
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

// Importing a utility function for conditional class name management
import { cn } from '@/lib/utils';

// Creating a Slider component using React's forwardRef to allow parent components to access the underlying DOM element
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>, // Type for the ref, corresponding to the Root component of the Slider
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> // Type for the props, excluding the ref
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref} // Forwarding the ref to the SliderPrimitive.Root component
    className={cn(
      'relative flex w-full touch-none select-none items-center', // Base styles for the slider: relative positioning, full width, no touch events, no text selection, and flexbox layout
      className // Merging with any additional classes passed via the className prop
    )}
    {...props} // Spreading any additional props onto the SliderPrimitive.Root component
  >
    {/* Slider track that serves as the background for the slider */}
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      {/* Slider range that indicates the selected portion of the slider */}
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {/* Slider thumb that the user can drag to adjust the value */}
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

// Setting the display name for the Slider component for better debugging and React DevTools integration
Slider.displayName = SliderPrimitive.Root.displayName;

// Exporting the Slider component for use in other parts of the application
export { Slider };