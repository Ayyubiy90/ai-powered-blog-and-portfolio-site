"use client"; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and types
import * as React from "react"; // Importing React for building components
import { type DialogProps } from "@radix-ui/react-dialog"; // Importing DialogProps type for type safety
import { Command as CommandPrimitive } from "cmdk"; // Importing Command component from cmdk library
import { Search } from "lucide-react"; // Importing Search icon from lucide-react library

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Importing Dialog and DialogContent components

// Creating a Command component that wraps the CommandPrimitive
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> // Type for the props
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref} // Forwarding the ref to the CommandPrimitive
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", // Default styles for the Command component
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the CommandPrimitive
  />
));
Command.displayName = CommandPrimitive.displayName; // Setting display name for debugging

// Defining the props interface for CommandDialog, extending DialogProps
interface CommandDialogProps extends DialogProps {}

// Creating the CommandDialog component
const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      {" "}
      {/* Rendering the Dialog component with passed props */}
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        {" "}
        {/* Dialog content with specific styles */}
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children} {/* Rendering children inside the Command component */}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

// Creating the CommandInput component
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> // Type for the props
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    {" "}
    {/* Wrapper for input with styles */}
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" /> {/* Search icon */}
    <CommandPrimitive.Input
      ref={ref} // Forwarding the ref to the CommandPrimitive.Input
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", // Input styles
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the CommandPrimitive.Input
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName; // Setting display name for debugging

// Creating the CommandList component
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> // Type for the props
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref} // Forwarding the ref to the CommandPrimitive.List
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} // List styles
    {...props} // Spreading the rest of the props onto the CommandPrimitive.List
  />
));

CommandList.displayName = CommandPrimitive.List.displayName; // Setting display name for debugging

// Creating the CommandEmpty component
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> // Type for the props
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref} // Forwarding the ref to the CommandPrimitive.Empty
    className="py-6 text-center text-sm" // Styling for empty state
    {...props} // Spreading the rest of the props onto the CommandPrimitive.Empty
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName; // Setting display name for debugging

// Creating the CommandGroup component
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> // Type for the props
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref} // Forwarding the ref to the CommandPrimitive.Group
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", // Group styles
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the CommandPrimitive.Group
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName; // Setting display name for debugging

// Creating the CommandSeparator component
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> // Type for the props
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref} // Forwarding the ref to the CommandPrimitive.Separator
    className={cn("-mx-1 h-px bg-border", className)} // Separator styles
    {...props} // Spreading the rest of the props onto the CommandPrimitive.Separator
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName; // Setting display name for debugging

// Creating the CommandItem component
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> // Type for the props
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref} // Forwarding the ref to the CommandPrimitive.Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", // Item styles with conditional classes
      className // Allowing additional class names to be passed
    )}
    {...props} // Spreading the rest of the props onto the CommandPrimitive.Item
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName; // Setting display name for debugging

// Creating the CommandShortcut component
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground", // Shortcut styles
        className // Allowing additional class names to be passed
      )}
      {...props} // Spreading the rest of the props onto the span
    />
  );
};
CommandShortcut.displayName = "CommandShortcut"; // Setting display name for debugging

// Exporting all components for use in other parts of the application
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
