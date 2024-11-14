'use client'; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import { OTPInput, OTPInputContext } from 'input-otp'; // Importing OTPInput and context for handling OTP input
import { Dot } from 'lucide-react'; // Importing Dot component from lucide-react for visual separators

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class names

// Creating an InputOTP component that wraps the OTPInput component
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof OTPInput> // Props type for the component
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref} // Forwarding the ref to the underlying OTPInput component
    containerClassName={cn( // Applying conditional class names to the container
      'flex items-center gap-2 has-[:disabled]:opacity-50', // Flex container with gap and disabled opacity
      containerClassName // Merging with any additional container class names passed as props
    )}
    className={cn('disabled:cursor-not-allowed', className)} // Applying class names to the OTPInput
    {...props} // Spreading the rest of the props onto the OTPInput component
  />
));
InputOTP.displayName = 'InputOTP'; // Setting display name for debugging

// Creating an InputOTPGroup component to group OTP inputs
const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>, // Type for the ref
  React.ComponentPropsWithoutRef<'div'> // Props type for the component
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} /> // Flex container for grouping
));
InputOTPGroup.displayName = 'InputOTPGroup'; // Setting display name for debugging

// Creating an InputOTPSlot component for individual OTP input slots
const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>, // Type for the ref
  React.ComponentPropsWithoutRef<'div'> & { index: number } // Props type including an index for the slot
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext); // Accessing the OTPInput context
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]; // Destructuring the slot data

  return (
    <div
      ref={ref} // Forwarding the ref to the underlying div
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md', // Styling for the slot
        isActive && 'z-10 ring-2 ring-ring ring-offset-background', // Adding styles if the slot is active
        className // Merging with any additional class names passed as props
      )}
      {...props} // Spreading the rest of the props onto the div
    >
      {char} // Displaying the character for the current slot
      {hasFakeCaret && ( // Conditionally rendering a fake caret if applicable
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" /> // Styling for the blinking caret
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot'; // Setting display name for debugging

// Creating an InputOTPSeparator component for visual separation between OTP slots
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>, // Type for the ref
  React.ComponentPropsWithoutRef<'div'> // Props type for the component
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}> // Setting role as separator for accessibility
    <Dot /> // Rendering the Dot component as a visual separator
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator'; // Setting display name for debugging

// Exporting the components for use in other parts of the application
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };