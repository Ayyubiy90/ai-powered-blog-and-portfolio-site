import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Rating {
  postId: string;
  rating: number;
  timestamp: number;
}

interface RatingsStore {
  ratings: Rating[];
  addRating: (postId: string, rating: number) => void;
  getRating: (postId: string) => number | null;
}

export const useRatingsStore = create<RatingsStore>()(
  persist(
    (set, get) => ({
      ratings: [],
      addRating: (postId, rating) => {
        set((state) => ({
          ratings: [
            ...state.ratings.filter((r) => r.postId !== postId),
            { postId, rating, timestamp: Date.now() },
          ],
        }));
      },
      getRating: (postId) => {
        const rating = get().ratings.find((r) => r.postId === postId);
        return rating ? rating.rating : null;
      },
    }),
    {
      name: 'blog-ratings',
    }
  )
);
