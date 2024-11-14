'use client'; // Indicates that this component is a client component in Next.js

// Importing the necessary components from Radix UI's collapsible package
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

// Assigning the Root component of the Collapsible to a new variable for easier usage
const Collapsible = CollapsiblePrimitive.Root;

// Assigning the Trigger component of the Collapsible to a new variable for easier usage
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

// Assigning the Content component of the Collapsible to a new variable for easier usage
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

// Exporting the Collapsible components for use in other parts of the application
export { Collapsible, CollapsibleTrigger, CollapsibleContent };