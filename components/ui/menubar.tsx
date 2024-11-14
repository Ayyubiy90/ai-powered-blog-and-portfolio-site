// Indicating that this file is a client component in a Next.js application
"use client";

// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import * as MenubarPrimitive from "@radix-ui/react-menubar"; // Importing Radix UI's Menubar component
import { Check, ChevronRight, Circle } from "lucide-react"; // Importing icons from Lucide React
import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name management

// Creating aliases for Radix UI's Menubar components for easier access
const MenubarMenu = MenubarPrimitive.Menu; // Alias for Menubar menu component
const MenubarGroup = MenubarPrimitive.Group; // Alias for Menubar group component
const MenubarPortal = MenubarPrimitive.Portal; // Alias for Menubar portal component
const MenubarSub = MenubarPrimitive.Sub; // Alias for Menubar sub-component
const MenubarRadioGroup = MenubarPrimitive.RadioGroup; // Alias for Menubar radio group component

// Defining the Menubar component with ref forwarding and styling
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> // Type for the props
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref} // Forwarding the ref to the root element
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1", // Base styles for the Menubar
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName; // Setting display name for debugging

// Defining the MenubarTrigger component with ref forwarding and styling
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> // Type for the props
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref} // Forwarding the ref to the trigger element
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", // Base styles for the trigger
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName; // Setting display name for debugging

// Defining the MenubarSubTrigger component with ref forwarding and styling
const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean; // Optional prop to add left padding
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref} // Forwarding the ref to the sub-trigger element
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", // Base styles for the sub-trigger
      inset && "pl-8", // Add left padding if inset is true
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  >
    {children} // Rendering children inside the sub-trigger
    <ChevronRight className="ml-auto h-4 w-4" /> // Adding a chevron icon to
    indicate a submenu
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName; // Setting display name for debugging

// Defining the MenubarSubContent component with ref forwarding and styling
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> // Type for the props
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref} // Forwarding the ref to the sub-content element
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-pop bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", // Base styles for the sub-content with animations
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName; // Setting display name for debugging

// Defining the MenubarContent component with ref forwarding and styling
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> // Type for the props
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, // Destructuring props with default values
    ref
  ) => (
    <MenubarPrimitive.Portal>
      {" "}
      // Using a portal to render the content outside the normal DOM hierarchy
      <MenubarPrimitive.Content
        ref={ref} // Forwarding the ref to the content element
        align={align} // Aligning the content based on the provided prop
        alignOffset={alignOffset} // Offset for alignment
        sideOffset={sideOffset} // Offset for side positioning
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", // Base styles for the content with animations
          className // Allowing additional custom classes
        )}
        {...props} // Spreading any additional props
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName; // Setting display name for debugging

// Defining the MenubarItem component with ref forwarding and styling
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean; // Optional prop to add left padding
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref} // Forwarding the ref to the item element
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", // Base styles for the item
      inset && "pl-8", // Add left padding if inset is true
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName; // Setting display name for debugging

// Defining the MenubarCheckboxItem component with ref forwarding and styling
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> // Type for the props
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref} // Forwarding the ref to the checkbox item element
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", // Base styles for the checkbox item
      className // Allowing additional custom classes
    )}
    checked={checked} // Pass the checked state to the checkbox item
    {...props} // Spreading any additional props
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {" "}
      // Container for the checkbox indicator
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" /> // Render the check icon when the checkbox
        is checked
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children} // Render the children inside the checkbox item
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName; // Setting display name for debugging

// Defining the MenubarRadioItem component with ref forwarding and styling
const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> // Type for the props
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref} // Forwarding the ref to the radio item element
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", // Base styles for the radio item
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {" "}
      // Container for the radio indicator
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" /> // Render the radio circle
        icon
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children} // Render the children inside the radio item
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName; // Setting display name for debugging

// Defining the MenubarLabel component with ref forwarding and styling
const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean; // Optional prop to add left padding
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref} // Forwarding the ref to the label element
    className={cn(
      "px-2 py-1.5 text-sm font-semibold", // Base styles for the label
      inset && "pl-8", // Add left padding if inset is true
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName; // Setting display name for debugging

// Defining the MenubarSeparator component with ref forwarding and styling
const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> // Type for the props
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref} // Forwarding the ref to the separator element
    className={cn("-mx-1 my-1 h-px bg-muted", className)} // Base styles for the separator
    {...props} // Spreading any additional props
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName; // Setting display name for debugging

// Defining the MenubarShortcut component for displaying keyboard shortcuts
const MenubarShortcut = ({
  className,
  ...props // Accepting additional props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground", // Base styles for the shortcut text
        className // Allowing additional custom classes
      )}
      {...props} // Spreading any additional props
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut"; // Setting display name for debugging

// Exporting all the defined components for use in other parts of the application
export {
  Menubar, // Main Menubar component
  MenubarMenu, // Menubar menu component
  MenubarTrigger, // Menubar trigger component
  MenubarContent, // Menubar content component
  MenubarItem, // Menubar item component
  MenubarSeparator, // Menubar separator component
  MenubarLabel, // Menubar label component
  MenubarCheckboxItem, // Menubar checkbox item component
  MenubarRadioGroup, // Menubar radio group component
  MenubarRadioItem, // Menubar radio item component
  MenubarPortal, // Menubar portal component
  MenubarSubContent, // Menubar sub-content component
  MenubarSubTrigger, // Menubar sub-trigger component
  MenubarGroup, // Menubar group component
  MenubarSub, // Menubar sub-component
  MenubarShortcut, // Menubar shortcut component
};
