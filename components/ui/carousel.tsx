"use client"; // Indicates that this component is a client component in Next.js

import * as React from "react"; // Importing the React library for building components
import useEmblaCarousel, {
  type UseEmblaCarouselType, // Importing types for the Embla carousel
} from "embla-carousel-react"; // Importing the Embla carousel hook
import { ArrowLeft, ArrowRight } from "lucide-react"; // Importing arrow icons for navigation

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name merging
import { Button } from "@/components/ui/button"; // Importing a Button component

// Defining types for the carousel API and options
type CarouselApi = UseEmblaCarouselType[1]; // Type for the carousel API
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>; // Parameters type for the useEmblaCarousel hook
type CarouselOptions = UseCarouselParameters[0]; // Type for carousel options
type CarouselPlugin = UseCarouselParameters[1]; // Type for carousel plugins

// Defining props for the Carousel component
type CarouselProps = {
  opts?: CarouselOptions; // Optional carousel options
  plugins?: CarouselPlugin; // Optional carousel plugins
  orientation?: "horizontal" | "vertical"; // Orientation of the carousel
  setApi?: (api: CarouselApi) => void; // Function to set the carousel API
};

// Defining context properties for the Carousel context
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]; // Reference to the carousel element
  api: ReturnType<typeof useEmblaCarousel>[1]; // Carousel API
  scrollPrev: () => void; // Function to scroll to the previous item
  scrollNext: () => void; // Function to scroll to the next item
  canScrollPrev: boolean; // Flag indicating if scrolling to the previous item is possible
  canScrollNext: boolean; // Flag indicating if scrolling to the next item is possible
} & CarouselProps; // Extending CarouselProps

// Creating a context for the carousel
const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// Custom hook to use the Carousel context
function useCarousel() {
  const context = React.useContext(CarouselContext); // Accessing the Carousel context

  // Throwing an error if the hook is used outside of the Carousel component
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context; // Returning the context
}

// Carousel component definition using React.forwardRef
const Carousel = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> & CarouselProps // Props type for the component
>(
  (
    {
      orientation = "horizontal", // Default orientation is horizontal
      opts, // Carousel options
      setApi, // Function to set the carousel API
      plugins, // Carousel plugins
      className, // Additional class names
      children, // Child components
      ...props // Other props
    },
    ref // Ref forwarded to the outer div
  ) => {
    // Using the Embla carousel hook
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts, // Spreading carousel options
        axis: orientation === "horizontal" ? "x" : "y", // Setting axis based on orientation
      },
      plugins // Passing plugins
    );

    // State to track if scrolling is possible
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    // Callback to update scroll capabilities based on the current selection
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return; // Exit if no API is available
      }

      // Update scroll capability states
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    // Function to scroll to the previous item
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev(); // Calling the scrollPrev method on the API
    }, [api]);

    // Function to scroll to the next item
    const scrollNext = React.useCallback(() => {
      api?.scrollNext(); // Calling the scrollNext method on the API
    }, [api]);

    // Handling keyboard navigation
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault(); // Prevent default behavior
          scrollPrev(); // Scroll to the previous item
        } else if (event.key === "ArrowRight") {
          event.preventDefault(); // Prevent default behavior
          scrollNext(); // Scroll to the next item
        }
      },
      [scrollPrev, scrollNext] // Dependencies for the callback
    );

    // Effect to set the API when available
    React.useEffect(() => {
      if (!api || !setApi) {
        return; // Exit if API or setApi function is not available
      }

      setApi(api); // Set the API in the parent component
    }, [api, setApi]);

    // Effect to handle selection changes and re-initialization
    React.useEffect(() => {
      if (!api) {
        return; // Exit if no API is available
      }

      onSelect(api); // Call onSelect to update scroll capabilities
      api.on("reInit", onSelect); // Listen for re-initialization
      api.on("select", onSelect); // Listen for selection changes

      return () => {
        api?.off("select", onSelect); // Cleanup listener on unmount
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef, // Providing the carousel reference
          api: api, // Providing the API
          opts, // Providing options
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"), // Providing orientation
          scrollPrev, // Providing scrollPrev function
          scrollNext, // Providing scrollNext function
          canScrollPrev, // Providing canScrollPrev state
          canScrollNext, // Providing canScrollNext state
        }}>
        <div
          ref={ref} // Ref for the outer div
          onKeyDownCapture={handleKeyDown} // Handling key down events
          className={cn("relative", className)} // Merging class names
          role="region" // ARIA role for accessibility
          aria-roledescription="carousel" // ARIA description for accessibility
          {...props} // Spreading other props
        >
          {children} // Rendering child components
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel"; // Setting display name for debugging

// CarouselContent component definition
const CarouselContent = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel(); // Using the Carousel context

  return (
    <div ref={carouselRef} className="overflow-hidden">
      {" "}
      // Ref for the carousel content
      <div
        ref={ref} // Ref for the inner div
        className={cn(
          "flex", // Flexbox for layout
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", // Adjusting margin based on orientation
          className // Additional class names
        )}
        {...props} // Spreading other props
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent"; // Setting display name for debugging

// CarouselItem component definition
const CarouselItem = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.HTMLAttributes<HTMLDivElement> // Props type for the component
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel(); // Using the Carousel context

  return (
    <div
      ref={ref} // Ref for the item
      role="group" // ARIA role for accessibility
      aria-roledescription="slide" // ARIA description for accessibility
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full", // Flexbox properties for item sizing
        orientation === "horizontal" ? "pl-4" : "pt-4", // Adjusting padding based on orientation
        className // Additional class names
      )}
      {...props} // Spreading other props
    />
  );
});
CarouselItem.displayName = "CarouselItem"; // Setting display name for debugging

// CarouselPrevious component definition
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement, // Type of the ref (HTMLButtonElement)
  React.ComponentProps<typeof Button> // Props type for the Button component
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel(); // Using the Carousel context

  return (
    <Button
      ref={ref} // Ref for the button
      variant={variant} // variant={variant} // Button variant (default is 'outline')
      size={size} // Button size (default is 'icon')
      className={cn(
        "absolute h-8 w-8 rounded-full", // Styling for the button
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2" // Positioning for horizontal orientation
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90", // Positioning for vertical orientation
        className // Additional class names
      )}
      disabled={!canScrollPrev} // Disable button if cannot scroll to previous
      onClick={scrollPrev} // Click handler to scroll to previous item
      {...props} // Spreading other props
    >
      <ArrowLeft className="h-4 w-4" /> // Left arrow icon
      <span className="sr-only">Previous slide</span> // Screen reader text for
      accessibility
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious"; // Setting display name for debugging

// CarouselNext component definition
const CarouselNext = React.forwardRef<
  HTMLButtonElement, // Type of the ref (HTMLButtonElement)
  React.ComponentProps<typeof Button> // Props type for the Button component
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel(); // Using the Carousel context

  return (
    <Button
      ref={ref} // Ref for the button
      variant={variant} // Button variant (default is 'outline')
      size={size} // Button size (default is 'icon')
      className={cn(
        "absolute h-8 w-8 rounded-full", // Styling for the button
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2" // Positioning for horizontal orientation
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", // Positioning for vertical orientation
        className // Additional class names
      )}
      disabled={!canScrollNext} // Disable button if cannot scroll to next
      onClick={scrollNext} // Click handler to scroll to next item
      {...props} // Spreading other props
    >
      <ArrowRight className="h-4 w-4" /> // Right arrow icon
      <span className="sr-only">Next slide</span> // Screen reader text for
      accessibility
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext"; // Setting display name for debugging

// Exporting types and components for use in other parts of the application
export {
  type CarouselApi, // Exporting the CarouselApi type
  Carousel, // Exporting the Carousel component
  CarouselContent, // Exporting the CarouselContent component
  CarouselItem, // Exporting the CarouselItem component
  CarouselPrevious, // Exporting the CarouselPrevious component
  CarouselNext, // Exporting the CarouselNext component
};
