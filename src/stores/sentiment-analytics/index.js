import { create } from 'zustand';

const initialState = {
  analytics: [],
};

export const useAnalyticsStore = create((set) => ({
  ...initialState,
  setAnalytics: (analytics) => set({ analytics }),
  resetAnalyticsStore: () => set({ analytics: [], loading: true }),
}));
