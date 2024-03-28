import { create } from 'zustand';

export const useReviewDetailStore = create((set) => ({
	data: {},
	loading: false,
	setData: (data) => set({ data }),
	setLoading: (loading) => set({ loading }),
}));
