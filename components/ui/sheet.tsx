// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for creating components
import * as SheetPrimitive from '@radix-ui/react-dialog'; // Importing Radix UI's Dialog components for creating accessible modal sheets
import { cva, type VariantProps } from 'class-variance-authority'; // Importing cva for managing class variants and types for props
import { X } from 'lucide-react'; // Importing the X icon from Lucide for the close button

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the Sheet component as the root of the sheet dialog
const Sheet = SheetPrimitive.Root;

// Defining the trigger component that opens the sheet
const SheetTrigger = SheetPrimitive.Trigger;

// Defining the close component that closes the sheet
const SheetClose = SheetPrimitive.Close;

// Defining the portal component for rendering the sheet in a separate DOM node
const SheetPortal = SheetPrimitive.Portal;

// Defining the overlay component that appears behind the sheet
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>, // Type for the ref, corresponding to the Overlay component of SheetPrimitive
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> // Props type for the Overlay component, excluding ref
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay // The overlay element that covers the background
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', // Styles for the overlay, including animations based on state
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
    ref={ref} // Forwarding the ref to the overlay component
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName; // Setting the display name for better debugging

// Defining variants for the sheet's positioning and animations using class-variance-authority
const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500', // Base styles for the sheet
  {
    variants: {
      side: { // Variants for the side from which the sheet appears
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top', // Styles for top sheet
        bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom', // Styles for bottom sheet
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm', // Styles for left sheet
        right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm', // Styles for right sheet
      },
    },
    defaultVariants: {
      side: 'right', // Default side for the sheet if none is specified
    },
  }
);

// Defining the props for the SheetContent component, extending from the base content props and variant props
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

// Defining the SheetContent component using React.forwardRef for ref forwarding
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>, // Type for the ref, corresponding to the Content component of SheetPrimitive
  SheetContentProps // Props type for the SheetContent component
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal> // Using the SheetPortal to render the content in a separate DOM node
    <SheetOverlay /> // Rendering the overlay behind the content
    <SheetPrimitive.Content // The main content area of the sheet
      ref={ref} // Forwarding the ref to the content component
      className={cn(sheetVariants({ side }), className)} // Applying conditional class names based on the side variant
      {... props} // Spreading any additional props passed to the component
    >
      {children} // Rendering any child components or elements inside the content area
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"> // Close button with styling and accessibility features
        <X className="h-4 w-4" /> // Rendering the close icon
        <span className="sr-only">Close</span> // Screen reader only text for accessibility
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName; // Setting the display name for better debugging

// Defining the SheetHeader component for the header section of the sheet
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left', // Flexbox styles for layout and spacing
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  />
);
SheetHeader.displayName = 'SheetHeader'; // Setting the display name for better debugging

// Defining the SheetFooter component for the footer section of the sheet
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', // Flexbox styles for layout and spacing
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  />
);
SheetFooter.displayName = 'SheetFooter'; // Setting the display name for better debugging

// Defining the SheetTitle component for the title section of the sheet
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>, // Type for the ref, corresponding to the Title component of SheetPrimitive
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> // Props type for the SheetTitle component, excluding ref
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref} // Forwarding the ref to the title component
    className={cn('text-lg font-semibold text-foreground', className)} // Applying styles for the title
    {...props} // Spreading any additional props passed to the component
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName; // Setting the display name for better debugging

// Defining the SheetDescription component for the description section of the sheet
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>, // Type for the ref, corresponding to the Description component of SheetPrimitive
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> // Props type for the SheetDescription component, excluding ref
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref} // Forwarding the ref to the description component
    className={cn('text-sm text-muted-foreground', className)} // Applying styles for the description
    {...props} // Spreading any additional props passed to the component
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName; // Setting the display name for better debugging

// Exporting all components for use in other parts of the application
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};