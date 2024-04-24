import { create } from 'zustand';

const initialState = {
  reviews: [],
};

export const useReviewsStore = create((set) => ({
  ...initialState,
  setReviews: (reviews) => set({ reviews }),
  resetReviewsStore: () => set({ ...initialState }),
}));
