import { create } from 'zustand';

export const useReviewsStore = create((set) => ({
	data: {},
	loading: false,
	setData: (data) =>
		set({
			data,
		}),
	setLoading: (loading) => set({ loading }),
	resetReviewsStore: () => set({ data: {}, loading: false }),
}));
