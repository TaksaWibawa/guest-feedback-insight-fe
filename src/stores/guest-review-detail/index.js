import { create } from 'zustand';

const initialState = {
  reviewDetail: null,
};

export const useReviewDetailStore = create((set) => ({
  ...initialState,
  setReviewDetail: (reviewDetail) => set({ reviewDetail }),
  resetReviewDetail: () => set(initialState),
}));
