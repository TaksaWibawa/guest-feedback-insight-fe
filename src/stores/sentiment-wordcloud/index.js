import { create } from 'zustand';

export const useWordcloudStore = create((set) => ({
	wordcloud: [],
	loading: true,
	setWordcloud: (wordcloud) => set({ wordcloud }),
	setLoading: (loading) => set({ loading }),
	resetWordcloudStore: () => set({ wordcloud: [], loading: true }),
}));
