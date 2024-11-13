"use client"; // Indicates that this file is a client-side component in a Next.js application

import { createContext, useContext, useEffect, useState } from "react"; // Importing necessary hooks and functions from React

// Defining a type for the theme, which can be 'dark', 'light', or 'system'
type Theme = "dark" | "light" | "system";

// Defining the props for the ThemeProvider component
type ThemeProviderProps = {
  children: React.ReactNode; // Children components that will be wrapped by the ThemeProvider
  defaultTheme?: Theme; // Optional default theme
  storageKey?: string; // Optional key for local storage
  attribute?: string; // Optional attribute to set on the HTML element
  enableSystem?: boolean; // Optional flag to enable system theme detection
};

// Defining the state structure for the ThemeProvider context
type ThemeProviderState = {
  theme: Theme; // Current theme
  setTheme: (theme: Theme) => void; // Function to update the theme
};

// Creating a context for the ThemeProvider with an initial value of undefined
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

// ThemeProvider component definition
export function ThemeProvider({
  children,
  defaultTheme = "system", // Default theme is set to 'system'
  storageKey = "ui-theme", // Default storage key for local storage
  attribute = "data-theme", // Default attribute to set on the HTML element
  enableSystem = true, // Default to enabling system theme detection
  ...props // Spread operator to capture any additional props
}: ThemeProviderProps) {
  // State to hold the current theme, initialized with the default theme
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Effect to update the document's root element based on the current theme
  useEffect(() => {
    const root = window.document.documentElement; // Get the root HTML element
    root.removeAttribute(attribute); // Remove the existing attribute

    // If the theme is set to 'system' and system detection is enabled
    if (theme === "system" && enableSystem) {
      // Check the system's color scheme preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark" // If dark mode is preferred, set systemTheme to 'dark'
        : "light"; // Otherwise, set it to 'light'

      root.classList.add(systemTheme); // Add the system theme class to the root element
      return; // Exit the effect
    }

    // If a specific theme is set, add that theme class to the root element
    root.classList.add(theme);
  }, [theme, attribute, enableSystem]); // Dependencies for the effect

  // Value to be provided to the context, including the current theme and a function to set the theme
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme); // Store the selected theme in local storage
      setTheme(theme); // Update the state with the new theme
    },
  };

  // Return the ThemeProvider context provider with the value and children
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children} {/* Render the children components */}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the ThemeProvider context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext); // Get the context value

  // Throw an error if the hook is used outside of a ThemeProvider
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context; // Return the context value
};
