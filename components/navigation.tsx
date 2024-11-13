"use client"; // Indicates that this file is a client-side component in a Next.js application

// Importing necessary modules and components
import Link from "next/link"; // Link component for client-side navigation
import { ModeToggle } from "./mode-toggle"; // Importing the ModeToggle component for theme switching
import { Button } from "./ui/button"; // Importing the Button component from the UI library
import { Brain, FileText, Home, MessageSquare, User } from "lucide-react"; // Importing icons from lucide-react
import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names
import { useState } from "react"; // Importing useState hook for managing component state
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"; // Importing sheet components for mobile navigation
import { Menu } from "lucide-react"; // Importing the Menu icon for the mobile navigation trigger

// Exporting the Navigation component
export function Navigation() {
  // State to manage the open/closed status of the mobile navigation sheet
  const [isOpen, setIsOpen] = useState(false);

  // NavItems component to render navigation links
  const NavItems = ({
    className,
    isMobile = false,
  }: {
    className?: string;
    isMobile?: boolean;
  }) => (
    <nav className={cn("flex items-center gap-1 md:gap-2", className)}>
      {" "}
      {/* Navigation container with flex layout */}
      {/* Link to the Home page */}
      <Link href="/">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <Home className="mr-2 h-4 w-4" /> {/* Home icon */}
          Home
        </Button>
      </Link>
      {/* Link to the Projects page */}
      <Link href="/projects">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <FileText className="mr-2 h-4 w-4" /> {/* Projects icon */}
          Projects
        </Button>
      </Link>
      {/* Link to the Chat page */}
      <Link href="/chat">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <MessageSquare className="mr-2 h-4 w-4" /> {/* Chat icon */}
          Chat
        </Button>
      </Link>
      {/* Link to the About page */}
      <Link href="/about">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <User className="mr-2 h-4 w-4" /> {/* About icon */}
          About
        </Button>
      </Link>
    </nav>
  );

  // The component returns the header with navigation elements
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Container for the header content */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and title linking to the home page */}
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" /> {/* Brain icon for the logo */}
          <span className="font-bold">AI Portfolio</span>{" "}
          {/* Title of the portfolio */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          {" "}
          {/* Hidden on mobile, shown on medium screens and up */}
          <NavItems /> {/* Render the navigation items */}
        </div>

        <div className="flex items-center gap-2">
          {" "}
          {/* Container for the mode toggle and mobile navigation */}
          <ModeToggle />{" "}
          {/* Render the ModeToggle component for theme switching */}
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {" "}
            {/* Sheet component for mobile navigation */}
            <SheetTrigger asChild className="md:hidden">
              {" "}
              {/* Trigger button for the sheet, hidden on medium screens and up */}
              <Button variant="ghost" size="icon">
                {" "}
                {/* Ghost button styled for icon size */}
                <Menu className="h-5 w-5" />{" "}
                {/* Menu icon for the mobile navigation trigger */}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              {" "}
              {/* Content of the sheet, aligned to the right */}
              <SheetTitle>Navigation Menu</SheetTitle>{" "}
              {/* Title of the sheet */}
              <div className="mt-6">
                {" "}
                {/* Container for the navigation items in the sheet */}
                <NavItems
                  className="flex-col items-start gap-2"
                  isMobile
                />{" "}
                {/* Render the navigation items in a column layout for mobile */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
