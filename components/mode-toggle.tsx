"use client"; // Indicates that this file is a client-side component in a Next.js application

// Importing necessary icons from the lucide-react library
import { Moon, Sun } from "lucide-react";

// Importing the useTheme hook from the theme provider component
import { useTheme } from "@/components/theme-provider";

// Importing the Button component from the UI library
import { Button } from "@/components/ui/button";

// Importing dropdown menu components from the UI library
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Exporting the ModeToggle component for use in other parts of the application
export function ModeToggle() {
  // Destructuring the setTheme function from the useTheme hook
  const { setTheme } = useTheme();

  // The component returns a dropdown menu for toggling themes
  return (
    <DropdownMenu>
      {/* Dropdown menu trigger that acts as a button */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {" "}
          {/* Ghost button with icon size */}
          {/* Sun icon representing the light theme */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon representing the dark theme */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Screen reader only text for accessibility */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* Dropdown menu content that appears when the menu is triggered */}
      <DropdownMenuContent align="end">
        {" "}
        {/* Aligns the dropdown menu to the end */}
        {/* Menu item to set the theme to light */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        {/* Menu item to set the theme to dark */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        {/* Menu item to set the theme to system default */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
