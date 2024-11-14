// Importing global CSS styles for the application
import './globals.css';

// Importing type definitions for Metadata from Next.js
import type { Metadata } from 'next';

// Importing the Inter font from Google Fonts for use in the application
import { Inter } from 'next/font/google';

// Importing the ThemeProvider component for managing theme settings
import { ThemeProvider } from '@/components/theme-provider';

// Importing the Navigation component for the site's navigation bar
import { Navigation } from '@/components/navigation';

// Importing the Footer component for the site's footer
import { Footer } from '@/components/footer';

// Importing the Toaster component for displaying toast notifications
import { Toaster } from '@/components/ui/toaster';

// Initializing the Inter font with the specified subsets
const inter = Inter({ subsets: ['latin'] });

// Defining metadata for the application, including title and description
export const metadata: Metadata = {
  title: 'AI-Powered Portfolio & Blog', // Title of the application
  description: 'A modern portfolio and blog with AI-powered recommendations', // Description of the application
};

// Defining the RootLayout component, which serves as the main layout for the application
export default function RootLayout({
  children, // Accepting children as a prop, which represents the nested components
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  return (
    // Setting the language attribute for the HTML document and suppressing hydration warnings
    <html lang="en" suppressHydrationWarning>
      {/* Applying the Inter font class to the body element */}
      <body className={inter.className}>
        {/* Wrapping the content in ThemeProvider to manage theme settings */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Creating a flex container that takes up the minimum height of the screen */}
          <div className="relative min-h-screen flex flex-col">
            {/* Rendering the Navigation component at the top of the layout */}
            <Navigation />
            {/* Main content area that expands to fill available space */}
            <main className="flex-1">{children}</main>
            {/* Rendering the Footer component at the bottom of the layout */}
            <Footer />
            {/* Rendering the Toaster component for toast notifications */}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}