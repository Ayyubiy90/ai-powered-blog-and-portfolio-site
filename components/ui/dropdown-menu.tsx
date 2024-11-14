'use client'; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from 'react'; // Importing React for building components
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'; // Importing Dropdown Menu components from Radix UI
import { Check, ChevronRight, Circle } from 'lucide-react'; // Importing icons from lucide-react

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class names

// Aliasing the DropdownMenu components for easier access
const DropdownMenu = DropdownMenuPrimitive.Root; // Main Dropdown Menu component
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger; // Component that triggers the dropdown menu
const DropdownMenuGroup = DropdownMenuPrimitive.Group; // Grouping items in the dropdown menu
const DropdownMenuPortal = DropdownMenuPrimitive.Portal; // Portal for rendering the dropdown menu
const DropdownMenuSub = DropdownMenuPrimitive.Sub; // Submenu component
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup; // Group for radio items in the dropdown menu

// Creating a DropdownMenuSubTrigger component for submenu triggers
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean; // Optional prop to control inset styling
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref} // Forwarding the ref to the SubTrigger
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', // Styles for the SubTrigger
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the SubTrigger
  >
    {children} // Rendering children inside the SubTrigger
    <ChevronRight className="ml-auto h-4 w-4" /> {/* Icon indicating a submenu */}
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName; // Setting display name for debugging

// Creating a DropdownMenuSubContent component for the content of submenus
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> // Type for the props
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref} // Forwarding the ref to the SubContent
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', // Styles for the SubContent
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the SubContent
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName; // Setting display name for debugging

// Creating a DropdownMenuContent component for the main dropdown menu content
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> // Type for the props
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal> {/* Using a portal to render the content */}
    <DropdownMenuPrimitive.Content
      ref={ref} // Forwarding the ref to the Content
      sideOffset={sideOffset} // Setting the offset for the side of the dropdown
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out -95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', // Styles for the Content
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the Content
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName; // Setting display name for debugging

// Creating a DropdownMenuItem component for individual items in the dropdown menu
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean; // Optional prop to control inset styling
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref} // Forwarding the ref to the Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Styles for the Item
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Item
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName; // Setting display name for debugging

// Creating a DropdownMenuCheckboxItem component for checkbox items in the dropdown menu
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> // Type for the props
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref} // Forwarding the ref to the CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Styles for the CheckboxItem
      className // Allowing additional class names to be passed
    )}
    checked={checked} // Setting the checked state
    {...props} // Spreading the rest of the props onto the CheckboxItem
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"> {/* Container for the checkbox indicator */}
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" /> {/* Check icon for the checkbox */}
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children} // Rendering children inside the CheckboxItem
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName; // Setting display name for debugging

// Creating a DropdownMenuRadioItem component for radio items in the dropdown menu
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> // Type for the props
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref} // Forwarding the ref to the RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', // Styles for the RadioItem
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the RadioItem
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"> {/* Container for the radio indicator */}
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" /> {/* Circle icon for the radio button */}
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children} // Rendering children inside the RadioItem
  </DropdownMenuPrimitive.RadioItem> ));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName; // Setting display name for debugging

// Creating a DropdownMenuLabel component for labeling items in the dropdown menu
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean; // Optional prop to control inset styling
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref} // Forwarding the ref to the Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold', // Styles for the Label
      inset && 'pl-8', // Adding left padding if inset is true
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the Label
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName; // Setting display name for debugging

// Creating a DropdownMenuSeparator component for separating items in the dropdown menu
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> // Type for the props
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref} // Forwarding the ref to the Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)} // Styles for the Separator
    {...props} // Spreading the rest of the props onto the Separator
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName; // Setting display name for debugging

// Creating a DropdownMenuShortcut component for displaying keyboard shortcuts
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)} // Styles for the Shortcut
      {...props} // Spreading the rest of the props onto the span
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'; // Setting display name for debugging

// Exporting all the components for use in other parts of the application
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};