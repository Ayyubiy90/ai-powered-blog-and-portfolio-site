import * as React from 'react'; // Importing the React library for building components
import { Slot } from '@radix-ui/react-slot'; // Importing Slot from Radix UI for rendering components conditionally
import { ChevronRight, MoreHorizontal } from 'lucide-react'; // Importing icons for breadcrumb navigation

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name merging

// Breadcrumb component definition using forwardRef to allow refs to be passed down
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode; // Optional prop for a custom separator
  }
>(({ ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} /> // Rendering a nav element with aria-label for accessibility
));
Breadcrumb.displayName = 'Breadcrumb'; // Setting display name for debugging

// BreadcrumbList component definition
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'> // Extending props for an ordered list
>(({ className, ...props }, ref) => (
  <ol
    ref={ref} // Forwarding ref to the ol element
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', // Base styles for the breadcrumb list
      className // Merging additional class names
    )}
    {...props} // Spreading other props onto the ol element
  />
));
BreadcrumbList.displayName = 'BreadcrumbList'; // Setting display name for debugging

// BreadcrumbItem component definition
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'> // Extending props for a list item
>(({ className, ...props }, ref) => (
  <li
    ref={ref} // Forwarding ref to the li element
    className={cn('inline-flex items-center gap-1.5', className)} // Base styles for the breadcrumb item
    {...props} // Spreading other props onto the li element
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem'; // Setting display name for debugging

// BreadcrumbLink component definition
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean; // Optional prop to render as a child component
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'; // Determine the component to render based on asChild prop

  return (
    <Comp
      ref={ref} // Forwarding ref to the chosen component
      className={cn('transition-colors hover:text-foreground', className)} // Base styles for the link
      {...props} // Spreading other props onto the component
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink'; // Setting display name for debugging

// BreadcrumbPage component definition
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> // Extending props for a span element
>(({ className, ...props }, ref) => (
  <span
    ref={ref} // Forwarding ref to the span element
    role="link" // Setting role for accessibility
    aria-disabled="true" // Indicating that this link is not interactive
    aria-current="page" // Indicating that this is the current page
    className={cn('font-normal text-foreground', className)} // Base styles for the page indicator
    {...props} // Spreading other props onto the span element
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage'; // Setting display name for debugging

// BreadcrumbSeparator component definition
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation" // Setting role for accessibility
    aria-hidden="true" // Hiding this element from assistive technologies
    className={cn('[&>svg]:size-3.5', className)} // Base styles for the separator
    {...props} // Spreading other props onto the li element
  >
    {children ?? <ChevronRight />} // Rendering children or a default separator icon
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'; // Setting display name for debugging

// BreadcrumbEllipsis component definition
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation" // Setting role for accessibility
    aria-hidden="true" // Hiding this element from assistive technologies
    className={cn('flex h-9 w-9 items-center justify-center', className)} // Base styles for the ellipsis
    {...props} // Spreading other props onto the span element
  >
    <MoreHorizontal className="h-4 w-4" /> // Rendering the ellipsis icon
    <span className="sr-only">More</span> // Screen reader only text for accessibility
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'; // Setting display name for debugging

// Exporting all components for use in other parts of the application
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};