// Exporting the Footer component for use in other parts of the application
export function Footer() {
  // The component returns a footer element
  return (
    <footer className="w-full border-t bg-background">
      {" "}
      {/* Full-width footer with a top border and background color */}
      <div className="container flex h-14 items-center justify-center text-sm">
        {" "}
        {/* Container for centering content */}
        <p className="text-muted-foreground">
          {" "}
          {/* Paragraph element for the copyright text */}© 2024 Abdullah
          Abdurazaq. All rights reserved. {/* Copyright notice */}
        </p>
      </div>
    </footer>
  );
}
