import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookmarkStore {
  bookmarks: string[];
  addBookmark: (postId: string) => void;
  removeBookmark: (postId: string) => void;
  isBookmarked: (postId: string) => boolean;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (postId) => 
        set((state) => ({
          bookmarks: [...state.bookmarks, postId]
        })),
      removeBookmark: (postId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((id) => id !== postId)
        })),
      isBookmarked: (postId) => 
        get().bookmarks.includes(postId),
    }),
    {
      name: 'bookmarks-storage',
    }
  )
);
