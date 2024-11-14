// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"; // Importing icons for pagination controls

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name management
import { ButtonProps, buttonVariants } from "@/components/ui/button"; // Importing button props and variants for styling pagination links

// Defining the main Pagination component
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation" // Setting the role for accessibility, indicating this is a navigation section
    aria-label="pagination" // Providing an accessible label for the navigation
    className={cn("mx-auto flex w-full justify-center", className)} // Applying styles for centering and layout, allowing additional custom classes
    {...props} // Spreading any additional props passed to the component
  />
);
Pagination.displayName = "Pagination"; // Setting display name for debugging purposes

// Defining the PaginationContent component with ref forwarding
const PaginationContent = React.forwardRef<
  HTMLUListElement, // Type for the ref, indicating it will refer to an unordered list element
  React.ComponentProps<"ul"> // Type for the props, extending the properties of a <ul> element
>(({ className, ...props }, ref) => (
  <ul
    ref={ref} // Forwarding the ref to the unordered list element
    className={cn("flex flex-row items-center gap-1", className)} // Applying styles for a horizontal layout and spacing between items
    {...props} // Spreading any additional props passed to the component
  />
));
PaginationContent.displayName = "PaginationContent"; // Setting display name for debugging purposes

// Defining the PaginationItem component with ref forwarding
const PaginationItem = React.forwardRef<
  HTMLLIElement, // Type for the ref, indicating it will refer to a list item element
  React.ComponentProps<"li"> // Type for the props, extending the properties of a <li> element
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} /> // Forwarding the ref to the list item element, allowing additional custom classes
));
PaginationItem.displayName = "PaginationItem"; // Setting display name for debugging purposes

// Defining the props for the PaginationLink component
type PaginationLinkProps = {
  isActive?: boolean; // Optional prop to indicate if the link is currently active (i.e., the current page)
} & Pick<ButtonProps, "size"> & // Picking the 'size' prop from ButtonProps to allow size customization
  React.ComponentProps<"a">; // Extending anchor element props to allow standard anchor attributes

// Defining the PaginationLink component
const PaginationLink = ({
  className,
  isActive, // Destructuring isActive prop to determine if the link is active
  size = "icon", // Default size for the button is set to 'icon'
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined} // Setting aria-current attribute for accessibility, indicating if this link is the current page
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost", // Choosing button variant based on whether the link is active
        size, // Applying the size prop for styling
      }),
      className // Allowing additional custom classes
    )}
    {...props} // Spreading any additional props passed to the component
  />
);
PaginationLink.displayName = "PaginationLink"; // Setting display name for debugging purposes

// Defining the PaginationPrevious component for the "Previous" button
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page" // Providing an accessible label for the button
    size="default" // Setting the size for the button to 'default'
    className={cn("gap-1 pl-2.5", className)} // Applying styles for spacing and allowing additional custom classes
    {...props} // Spreading any additional props passed to the component
  >
    <ChevronLeft className="h-4 w-4" /> // Rendering the left chevron icon
    <span>Previous</span> // Text for the button
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious"; // Setting display name for debugging purposes

// Defining the PaginationNext component for the "Next" button
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page" // Providing an accessible label for the button
    size="default" // Setting the size for the button to 'default'
    className={cn("gap-1 pr-2.5", className)} // Applying styles for spacing and allowing additional custom classes
    {...props} // Spreading any additional props passed to the component
  >
    <span>Next</span> // Text for the button
    <ChevronRight className="h-4 w-4" /> // Rendering the right chevron icon
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext"; // Setting display name for debugging purposes

// Defining the PaginationEllipsis component for indicating more pages
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden // Hiding this element from assistive technologies
    className={cn("flex h-9 w-9 items-center justify-center", className)} // Applying styles for layout and centering
    {...props} // Spreading any additional props passed to the component
  >
    <MoreHorizontal className="h-4 w-4" /> // Rendering the ellipsis icon to
    indicate more pages
    <span className="sr-only">More pages</span> // Screen reader only text for
    accessibility, indicating that there are more pages
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis"; // Setting display name for debugging purposes

// Exporting all components for use in other parts of the application
export {
  Pagination, // Exporting the main Pagination component
  PaginationContent, // Exporting the PaginationContent component
  PaginationEllipsis, // Exporting the PaginationEllipsis component
  PaginationItem, // Exporting the PaginationItem component
  PaginationLink, // Exporting the PaginationLink component
  PaginationNext, // Exporting the PaginationNext component
  PaginationPrevious, // Exporting the PaginationPrevious component
};
