// Importing React library for building user interfaces
import * as React from 'react';

// Importing a utility function for conditional class name management
import { cn } from '@/lib/utils';

// Creating a Table component using React's forwardRef to allow parent components to access the underlying DOM element
const Table = React.forwardRef<
  HTMLTableElement, // Type for the ref, corresponding to the HTMLTableElement
  React.HTMLAttributes<HTMLTableElement> // Type for the props, allowing standard HTML attributes for a table
>(({ className, ...props }, ref) => (
  // Wrapping the table in a div to enable overflow handling
  <div className="relative w-full overflow-auto">
    <table
      ref={ref} // Attaching the ref to the table element
      className={cn('w-full caption-bottom text-sm', className)} // Applying base styles and any additional classes
      {...props} // Spreading any additional props onto the table element
    />
  </div>
));

// Setting the display name for the Table component for better debugging
Table.displayName = 'Table';

// Creating a TableHeader component for the <thead> section of the table
const TableHeader = React.forwardRef<
  HTMLTableSectionElement, // Type for the ref, corresponding to the HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement> // Type for the props, allowing standard HTML attributes for a table section
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} /> // Attaching ref and applying styles
));

// Setting the display name for the TableHeader component
TableHeader.displayName = 'TableHeader';

// Creating a TableBody component for the <tbody> section of the table
const TableBody = React.forwardRef<
  HTMLTableSectionElement, // Type for the ref, corresponding to the HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement> // Type for the props, allowing standard HTML attributes for a table section
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref} // Attaching ref to the tbody element
    className={cn('[&_tr:last-child]:border-0', className)} // Applying styles, including removing border for the last row
    {...props} // Spreading any additional props onto the tbody element
  />
));

// Setting the display name for the TableBody component
TableBody.displayName = 'TableBody';

// Creating a TableFooter component for the <tfoot> section of the table
const TableFooter = React.forwardRef<
  HTMLTableSectionElement, // Type for the ref, corresponding to the HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement> // Type for the props, allowing standard HTML attributes for a table section
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref} // Attaching ref to the tfoot element
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', // Applying styles for the footer
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the tfoot element
  />
));

// Setting the display name for the TableFooter component
TableFooter.displayName = 'TableFooter';

// Creating a TableRow component for the <tr> elements in the table
const TableRow = React.forwardRef<
  HTMLTableRowElement, // Type for the ref, corresponding to the HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement> // Type for the props, allowing standard HTML attributes for a table row
>(({ className, ...props }, ref) => (
  <tr
    ref={ref} // Attaching ref to the tr element
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', // Applying styles for row hover and selection
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the tr element
  />
));

// Setting the display name for the TableRow component
TableRow.displayName = 'TableRow';

// Creating a TableHead component for the <th> elements in the table header
const TableHead = React.forwardRef<
  HTMLTableCellElement, // Type for the ref, corresponding to the HTMLTableCellElement
  React.ThHTMLAttributes<HTMLTableCellElement> // Type for the props, allowing standard HTML attributes for a table header cell
>(({ className, ...props }, ref) => (
  <th
    ref={ref} // Attaching ref to the th element
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', // Applying styles for header cell
      className // Allowing additional classes to be passed in
    )}
    {...props} // Spreading any additional props onto the th element
  />
));

// Setting the display name for the TableHead component
TableHead.displayName = 'TableHead';

// Creating a TableCell component for the <td> elements in the table
const TableCell = React.forwardRef<
  HTMLTableCellElement, // Type for the ref, corresponding to the HTMLTableCellElement
  React.TdHTMLAttributes<HTMLTableCellElement> // Type for the props, allowing standard HTML attributes for a table cell
>(({ className, ...props }, ref) => (
  <td
    ref={ref} // Attaching ref to the td element
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} // Applying styles for table cell
    {...props} // Spreading any additional props onto the td element
  />
));

// Setting the display name for the TableCell component
TableCell.displayName = 'TableCell';

// Creating a TableCaption component for the <caption> element of the table
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement, // Type for the ref, corresponding to the HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement> // Type for the props, allowing standard HTML attributes for a table caption
>(({ className, ...props }, ref) => (
  <caption
    ref={ref} // Attaching ref to the caption element
    className={cn('mt-4 text-sm text-muted-foreground', className)} // Applying styles for the caption
    {...props} // Spreading any additional props onto the caption element
  />
));

// Setting the display name for the TableCaption component
TableCaption.displayName = 'TableCaption';

// Exporting all the table components for use in other parts of the application
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};