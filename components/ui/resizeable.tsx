// Indicating that this component is a client component in a Next.js application
'use client';

// Importing necessary libraries and components
import { GripVertical } from 'lucide-react'; // Importing the GripVertical icon from Lucide for use as a resize handle
import * as ResizablePrimitive from 'react-resizable-panels'; // Importing the resizable panel components from the react-resizable-panels library

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name management

// Defining the ResizablePanelGroup component
const ResizablePanelGroup = ({
  className, // Accepting a className prop for custom styling
  ...props // Accepting any additional props that are passed to the component
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup // The root component for the resizable panel group
    className={cn( // Applying conditional class names for styling
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col', // Base styles for the panel group, including flex layout and full height/width
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  />
);

// Alias for the ResizablePrimitive.Panel component for easier usage
const ResizablePanel = ResizablePrimitive.Panel;

// Defining the ResizableHandle component
const ResizableHandle = ({
  withHandle, // A boolean prop to determine if the handle should be displayed
  className, // Accepting a className prop for custom styling
  ...props // Accepting any additional props that are passed to the component
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean; // Optional prop to control the visibility of the handle
}) => (
  <ResizablePrimitive.PanelResizeHandle // The handle component for resizing panels
    className={cn( // Applying conditional class names for styling
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className // Allowing additional custom classes to be passed
    )}
    {...props} // Spreading any additional props passed to the component
  >
    {withHandle && ( // Conditionally rendering the handle if withHandle is true
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

// Exporting the ResizablePanelGroup, ResizablePanel, and ResizableHandle components for use in other parts of the application
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };