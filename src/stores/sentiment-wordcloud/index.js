import { create } from 'zustand';

const initialState = {
  wordcloud: [],
};

export const useWordcloudStore = create((set) => ({
  ...initialState,
  setWordcloud: (wordcloud) => set({ wordcloud }),
  resetWordcloudStore: () => set(initialState),
}));
