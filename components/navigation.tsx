"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Brain,
  FileText,
  Home,
  MessageSquare,
  User,
  Bookmark,
  Folder,
  BookOpen,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({
    className,
    isMobile = false,
  }: {
    className?: string;
    isMobile?: boolean;
  }) => (
    <nav className={cn("flex items-center gap-1 md:gap-2", className)} role="navigation" aria-label="Main navigation">
      <Link href="/">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link href="/projects">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <Folder className="mr-2 h-4 w-4" />
          Projects
        </Button>
      </Link>
      <Link href="/blog">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <BookOpen className="mr-2 h-4 w-4" />
          Blog
        </Button>
      </Link>
      <Link href="/testimonials"> {/* New Testimonials Link */}
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <FileText className="mr-2 h-4 w-4" /> {/* Icon for Testimonials */}
          Testimonials
        </Button>
      </Link>
      <Link href="/chat">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat
        </Button>
      </Link>
      <Link href="/about">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <User className="mr-2 h-4 w-4" />
          About
        </Button>
      </Link>
      <Link href="/bookmarks">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => isMobile && setIsOpen(false)}>
          <Bookmark className="mr-2 h-4 w-4" />
          Bookmarks
        </Button>
      </Link>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">Abdullah AI Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavItems />
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle>Navigation Menu</SheetTitle>
              <div className="mt-6" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
                <NavItems className="flex-col items-start gap-2" isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
