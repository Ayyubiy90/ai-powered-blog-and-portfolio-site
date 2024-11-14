// Indicating that this component is a client component in a Next.js application
'use client';

// Importing React library for building user interfaces
import * as React from 'react';
// Importing Tabs components from Radix UI for creating accessible tab interfaces
import * as TabsPrimitive from '@radix-ui/react-tabs';

// Importing a utility function for conditional class name management
import { cn } from '@/lib/utils';

// Aliasing the Root component from Radix UI's Tabs as Tabs
const Tabs = TabsPrimitive.Root;

// Creating a TabsList component using React's forwardRef to allow parent components to access the underlying DOM element
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>, // Type for the ref, corresponding to the Radix Tabs List element
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> // Type for the props, allowing standard HTML attributes for the Tabs List
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref} // Attaching the ref to the Tabs List element
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', // Applying styles for the Tabs List
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Tabs List element
  />
));

// Setting the display name for the TabsList component for better debugging
TabsList.displayName = TabsPrimitive.List.displayName;

// Creating a TabsTrigger component for the individual tab buttons
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>, // Type for the ref, corresponding to the Radix Tabs Trigger element
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> // Type for the props, allowing standard HTML attributes for the Tabs Trigger
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref} // Attaching the ref to the Tabs Trigger element
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm', // Applying styles for the tab button
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Tabs Trigger element
  />
));

// Setting the display name for the TabsTrigger component for better debugging
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Creating a TabsContent component for the content associated with each tab
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>, // Type for the ref, corresponding to the Radix Tabs Content element
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> // Type for the props, allowing standard HTML attributes for the Tabs Content
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref} // Attaching the ref to the Tabs Content element
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', // Applying styles for the content area
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the Tabs Content element
  />
));

// Setting the display name for the TabsContent component for better debugging
TabsContent.displayName = TabsPrimitive.Content.displayName;

// Exporting all the tab components for use in other parts of the application
export { Tabs, TabsList, TabsTrigger, TabsContent };