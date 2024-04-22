import { create } from 'zustand';

export const useAnalyticsStore = create((set) => ({
	analytics: [],
	loading: true,
	setAnalytics: (analytics) => set({ analytics }),
	setLoading: (loading) => set({ loading }),
	resetAnalyticsStore: () => set({ analytics: [], loading: true }),
}));
