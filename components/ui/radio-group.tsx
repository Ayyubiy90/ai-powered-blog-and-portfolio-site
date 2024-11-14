// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'; // Importing Radix UI's Radio Group components for creating radio button groups
import { Circle } from 'lucide-react'; // Importing the Circle icon from Lucide for use in the radio button indicator

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the RadioGroup component with ref forwarding
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>, // Type for the ref, indicating it will refer to the RadioGroupPrimitive.Root element
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> // Type for the props, extending the properties of RadioGroupPrimitive.Root without the ref
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root // The root component for the radio group
      className={cn('grid gap-2', className)} // Applying grid layout and gap styles, along with any additional custom classes
      {...props} // Spreading any additional props passed to the component
      ref={ref} // Forwarding the ref to the RadioGroupPrimitive.Root element
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName; // Setting display name for debugging purposes

// Defining the RadioGroupItem component with ref forwarding
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>, // Type for the ref, indicating it will refer to the RadioGroupPrimitive.Item element
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> // Type for the props, extending the properties of RadioGroupPrimitive.Item without the ref
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item // The individual radio button item
      ref={ref} // Forwarding the ref to the RadioGroupPrimitive.Item element
      className={cn( // Applying conditional class names for styling
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', // Base styles for the radio button
        className // Allowing additional custom classes to be passed
      )}
      {...props} // Spreading any additional props passed to the component
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center"> // The indicator that visually represents the selected state
        <Circle className="h-2.5 w-2.5 fill-current text-current" /> // The Circle icon representing the selected state, styled to match the current text color
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName; // Setting display name for debugging purposes

// Exporting the RadioGroup and RadioGroupItem components for use in other parts of the application
export { RadioGroup, RadioGroupItem };