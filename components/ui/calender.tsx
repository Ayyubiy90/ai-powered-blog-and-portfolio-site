'use client'; // Indicates that this component is a client component in a Next.js application

import * as React from 'react'; // Importing the React library for building components
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importing icons for navigation from the lucide-react library
import { DayPicker } from 'react-day-picker'; // Importing the DayPicker component for date selection

import { cn } from '@/lib/utils'; // Importing a utility function for conditional class name merging
import { buttonVariants } from '@/components/ui/button'; // Importing button variants for consistent styling

// Defining the type for CalendarProps, extending the props of the DayPicker component
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Calendar component definition
function Calendar({
  className, // Additional class names for styling
  classNames, // Custom class names for specific parts of the DayPicker
  showOutsideDays = true, // Prop to control the visibility of days outside the current month
  ...props // Spread operator to capture any additional props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays} // Passing the showOutsideDays prop to DayPicker
      className={cn('p-3', className)} // Merging base class with any additional class names
      classNames={{
        // Custom class names for various parts of the DayPicker
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0', // Layout for months
        month: 'space-y-4', // Spacing for individual months
        caption: 'flex justify-center pt-1 relative items-center', // Styling for the caption area
        caption_label: 'text-sm font-medium', // Styling for the caption label
        nav: 'space-x-1 flex items-center', // Navigation button layout
        nav_button: cn(
          buttonVariants({ variant: 'outline' }), // Applying button styles for navigation buttons
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100' // Additional styles for navigation buttons
        ),
        nav_button_previous: 'absolute left-1', // Positioning for the previous button
        nav_button_next: 'absolute right-1', // Positioning for the next button
        table: 'w-full border-collapse space-y-1', // Table layout for the calendar
        head_row: 'flex', // Layout for the header row
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]', // Styling for header cells
        row: 'flex w-full mt-2', // Layout for calendar rows
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20', // Styling for individual cells with various states
        day: cn(
          buttonVariants({ variant: 'ghost' }), // Applying ghost button styles for days
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100' // Additional styles for day buttons
        ),
        day_range_end: 'day-range-end', // Class for the end of a selected range
        day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground', // Styles for selected days
        day_today: 'bg-accent text-accent-foreground', // Styles for today's date
        day_outside: 'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30', // Styles for days outside the current month
        day_disabled: 'text-muted-foreground opacity-50', // Styles for disabled days
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground', // Styles for days in the middle of a selected range
        day_hidden: 'invisible', // Class for hidden days
        ...classNames, // Merging any additional custom class names
      }}
      components={{
        // Custom components for navigation icons
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />, // Left navigation icon
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />, // Right navigation icon
      }}
      {...props} // Spreading any additional props to the DayPicker component
    />
  );
}
Calendar.displayName = 'Calendar'; // Setting a display name for the Calendar component for better debugging

export { Calendar }; // Exporting the Calendar component for use in other parts of the application