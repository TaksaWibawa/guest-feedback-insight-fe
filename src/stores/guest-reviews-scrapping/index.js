import { create } from 'zustand';

const initialState = {
  isLoading: false,
};

export const useScrappingStore = create((set) => ({
  ...initialState,
  setIsLoading: (value) => set({ isLoading: value }),
}));
