"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PostRatingProps {
  postId: string;
  initialRating?: number;
}

export function PostRating({ postId, initialRating = 0 }: PostRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRating = (value: number) => {
    if (!hasRated) {
      setRating(value);
      setHasRated(true);
      // Here you would typically send the rating to your backend
      console.log(`Rated ${value} stars for post ${postId}`);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2 mt-8 mb-8">
      <p className="text-sm text-muted-foreground">
        {hasRated ? "Thank you for rating!" : "Rate this article"}
      </p>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            variant="ghost"
            size="sm"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            disabled={hasRated}
            className={cn(
              "p-1 h-auto",
              hasRated ? "cursor-default" : "hover:bg-transparent hover:scale-110"
            )}
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className={cn(
                "h-6 w-6 transition-colors",
                star <= (hoveredRating || rating)
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              )}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
