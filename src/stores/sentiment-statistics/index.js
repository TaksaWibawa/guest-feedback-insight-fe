import { create } from 'zustand';

export const useStatisticsStore = create((set) => ({
	statistics: {},
	loading: true,
	setStatistics: (statistics) => set({ statistics }),
	setLoading: (loading) => set({ loading }),
	resetStatisticsStore: () => set({ statistics: {}, loading: true }),
}));
