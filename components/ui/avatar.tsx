'use client'; // Indicates that this component is a client component in a Next.js application

import * as React from 'react'; // Importing React library
import * as AvatarPrimitive from '@radix-ui/react-avatar'; // Importing Avatar components from Radix UI

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class names

// Creating a forwardRef component for the Avatar
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> // Props type for the component
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref} // Forwarding the ref to the Root component
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', // Default styles for the Avatar
      className // Allowing additional class names to be passed in
    )}
    {...props} // Spreading any additional props onto the Root component
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName; // Setting the display name for debugging

// Creating a forwardRef component for the AvatarImage
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> // Props type for the component
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref} // Forwarding the ref to the Image component
    className={cn('aspect-square h-full w-full', className)} // Default styles for the Avatar image
    {...props} // Spreading any additional props onto the Image component
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName; // Setting the display name for debugging

// Creating a forwardRef component for the AvatarFallback
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>, // Type for the ref
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> // Props type for the component
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref} // Forwarding the ref to the Fallback component
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted', // Default styles for the fallback
      className // Allowing additional class names to be passed in
    )}
    {...props} // Spreading any additional props onto the Fallback component
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName; // Setting the display name for debugging

// Exporting the Avatar, AvatarImage, and AvatarFallback components for use in other parts of the application
export { Avatar, AvatarImage, AvatarFallback };