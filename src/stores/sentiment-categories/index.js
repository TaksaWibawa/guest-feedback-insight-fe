import { create } from 'zustand';

export const useCategoriesStore = create((set) => ({
	showAspects: [],
	categories: [],
	loading: true,
	setShowAspects: (showAspects) => set({ showAspects }),
	setCategories: (categories) => set({ categories }),
	setLoading: (loading) => set({ loading }),
	handleToggle: (index) =>
		set((state) => {
			const newShow = [...state.showAspects];
			newShow[index] = !newShow[index];
			return { showAspects: newShow };
		}),
}));
