// Importing React library for building components
import * as React from 'react';

// Importing a utility function for conditional class names
import { cn } from '@/lib/utils';

// Defining the InputProps interface that extends the default input attributes
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Creating an Input component using React.forwardRef to allow ref forwarding
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  // Destructuring props to extract className, type, and the rest of the props
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // Setting the type of the input (e.g., text, password)
        className={cn( // Applying conditional class names for styling
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className // Merging with any additional class names passed as props
        )}
        ref={ref} // Forwarding the ref to the underlying input element
        {...props} // Spreading the rest of the props onto the input element
      />
    );
  }
);
Input.displayName = 'Input'; // Setting display name for debugging purposes

// Exporting the Input component for use in other parts of the application
export { Input };