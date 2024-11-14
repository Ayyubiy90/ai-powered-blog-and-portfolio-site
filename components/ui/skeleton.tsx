// Importing the utility function 'cn' for conditional class name management
import { cn } from '@/lib/utils';

// Defining the Skeleton component, which serves as a placeholder for loading content
function Skeleton({
  className, // Accepting a className prop for additional styling
  ...props // Accepting any other props that can be passed to a div element
}: React.HTMLAttributes<HTMLDivElement>) { // Specifying that the props are HTML attributes for a div element
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)} // Applying base styles for the skeleton: a pulsing animation, rounded corners, and a muted background color. Merging with any additional classes passed via the className prop.
      {...props} // Spreading any additional props onto the div element (e.g., onClick, style, etc.)
    />
  );
}

// Exporting the Skeleton component for use in other parts of the application
export { Skeleton };