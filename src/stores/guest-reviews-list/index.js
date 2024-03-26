import { create } from 'zustand';

export const useReviewsStore = create((set) => ({
	data: {},
	loading: true,
	setData: (data) =>
		set({
			data,
		}),
	setLoading: (loading) => set({ loading }),
}));
