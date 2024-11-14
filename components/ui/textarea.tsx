// Importing React library for building user interfaces
import * as React from 'react';

// Importing a utility function for conditional class name management
import { cn } from '@/lib/utils';

// Defining the interface for the Textarea component's props
// It extends the standard HTML attributes for a textarea element
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Creating a Textarea component using React's forwardRef
// This allows the parent component to access the underlying textarea DOM element
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  // Destructuring className and other props from the component's props
  ({ className, ...props }, ref) => {
    return (
      <textarea
        // Applying styles to the textarea using the cn utility function
        // This combines default styles with any additional classes passed in
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className // Allowing additional classes to be passed in
        )}
        ref={ref} // Attaching the ref to the textarea element
        {...props} // Spreading any additional props onto the textarea element
      />
    );
  }
);

// Setting the display name for the Textarea component for better debugging
Textarea.displayName = 'Textarea';

// Exporting the Textarea component for use in other parts of the application
export { Textarea };