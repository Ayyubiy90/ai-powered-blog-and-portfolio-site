// Indicating that this component is a client component in a Next.js application
'use client';

// Importing the useTheme hook from next-themes to manage theme context
import { useTheme } from 'next-themes';
// Importing the Toaster component from the Sonner library for displaying toast notifications
import { Toaster as Sonner } from 'sonner';

// Defining a type alias for the props of the Sonner Toaster component
type ToasterProps = React.ComponentProps<typeof Sonner>;

// Creating a Toaster component that accepts props of type ToasterProps
const Toaster = ({ ...props }: ToasterProps) => {
  // Using the useTheme hook to get the current theme, defaulting to 'system' if not set
  const { theme = 'system' } = useTheme();

  return (
    // Rendering the Sonner Toaster component with the current theme and additional props
    <Sonner
      theme={theme as ToasterProps['theme']} // Casting the theme to the appropriate type for the Sonner component
      className="toaster group" // Applying base styles and enabling group styles for nested elements
      toastOptions={{
        // Customizing the options for the toast notifications
        classNames: {
          // Defining styles for the toast container
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          // Defining styles for the toast description text
          description: 'group-[.toast]:text-muted-foreground',
          // Defining styles for the action button within the toast
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          // Defining styles for the cancel button within the toast
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props} // Spreading any additional props onto the Sonner Toaster component
    />
  );
};

// Exporting the Toaster component for use in other parts of the application
export { Toaster };