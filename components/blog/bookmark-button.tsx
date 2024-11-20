"use client";

import { Button } from "@/components/ui/button";
import { useBookmarkStore } from "@/lib/store/bookmarks";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface BookmarkButtonProps {
  postId: string;
}

export function BookmarkButton({ postId }: BookmarkButtonProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarkStore();
  const bookmarked = isBookmarked(postId);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(postId);
    } else {
      addBookmark(postId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleBookmark}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
    >
      {bookmarked ? (
        <BookmarkCheck className="h-6 w-6 text-black dark:text-white" />
      ) : (
        <Bookmark className="h-6 w-6 text-black dark:text-white" />
      )}
    </Button>
  );
}
