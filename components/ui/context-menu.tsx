'use client'; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'; // Importing Context Menu components from Radix UI
import { Check, ChevronRight, Circle } from 'lucide-react'; // Importing icons from lucide-react

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class names

// Aliasing the ContextMenu components for easier access
const ContextMenu = ContextMenuPrimitive.Root; // Main context menu component
const ContextMenuTrigger = ContextMenuPrimitive.Trigger; // Component that triggers the context menu
const ContextMenuGroup = ContextMenuPrimitive.Group; // Grouping items in the context menu
const ContextMenuPortal = ContextMenuPrimitive.Portal; // Portal for rendering the context menu
const ContextMenuSub = ContextMenuPrimitive.Sub; // Submenu component
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup; // Group for radio items in the context menu
// Creating a SubTrigger component for submenu items
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & { // Type for the props
    inset?: boolean; // Optional inset prop for additional styling
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref} // Forwarding the ref to the SubTrigger
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground', // Default styles for the SubTrigger
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the SubTrigger
  >
    {children} // Rendering children inside the SubTrigger
    <ChevronRight className="ml-auto h-4 w-4" /> // Right chevron icon indicating a submenu
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName; // Setting display name for debugging

// Creating a SubContent component for submenu content
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> // Type for the props
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref} // Forwarding the ref to the SubContent
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', // Styles for the SubContent
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the SubContent
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName; // Setting display name for debugging

// Creating the main ContextMenuContent component
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> // Type for the props
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal> {/* Using a portal to render the content */}
    <ContextMenuPrimitive.Content
      ref={ref} // Forwarding the ref to the Content
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[ state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', // Styles for the Content
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the Content
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName; // Setting display name for debugging

// Creating a ContextMenuItem component for individual items in the context menu
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & { // Type for the props
    inset?: boolean; // Optional inset prop for additional styling
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref} // Forwarding the ref to the Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Default styles for the Item
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Item
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName; // Setting display name for debugging

// Creating a ContextMenuCheckboxItem component for checkbox items in the context menu
const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> // Type for the props
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref} // Forwarding the ref to the CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Default styles for the CheckboxItem
      className // Allowing additional class names to be passed
    )}
    checked={checked} // Setting the checked state for the checkbox
    {...props} // Spreading the rest of the props onto the CheckboxItem
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"> {/* Container for the checkbox indicator */}
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" /> {/* Check icon for the checkbox */}
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children} // Rendering children inside the CheckboxItem
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName; // Setting display name for debugging

// Creating a ContextMenuRadioItem component for radio items in the context menu
const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> // Type for the props
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref} // Forwarding the ref to the RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Default styles for the RadioItem
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the RadioItem
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"> {/* Container for the radio indicator */}
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" /> {/* Circle icon for the radio button */}
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children} // Rendering children inside the RadioItem
  </ContextMenuPrimitive.RadioItem>
 ));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName; // Setting display name for debugging

// Creating a ContextMenuLabel component for labeling items in the context menu
const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & { // Type for the props
    inset?: boolean; // Optional inset prop for additional styling
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref} // Forwarding the ref to the Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold text-foreground', // Default styles for the Label
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Label
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName; // Setting display name for debugging

// Creating a ContextMenuSeparator component for separating items in the context menu
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> // Type for the props
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref} // Forwarding the ref to the Separator
    className={cn('-mx-1 my-1 h-px bg-border', className)} // Styles for the Separator
    {...props} // Spreading the rest of the props onto the Separator
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName; // Setting display name for debugging

// Creating a ContextMenuShortcut component for displaying keyboard shortcuts
const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground', // Styles for the shortcut text
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the span
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut'; // Setting display name for debugging

// Exporting all the components for use in other parts of the application
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};