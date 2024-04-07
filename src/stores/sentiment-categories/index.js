import { create } from 'zustand';

export const useCategoriesStore = create((set) => ({
	categories: [],
	loading: true,
	setCategories: (categories) => set({ categories }),
	setLoading: (loading) => set({ loading }),
	resetCategoriesStore: () => set({ categories: [], loading: true }),
}));
