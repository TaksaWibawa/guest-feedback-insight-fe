import { APISentimentAnalytics } from '@/apis';
import { create } from 'zustand';

export const useAspectsStore = create((set, get) => ({
	aspects: {},
	loading: true,
	setAspects: (category) => {
		const currentAspects = get().aspects;
		if (!currentAspects[category]) {
			APISentimentAnalytics.getAspectsByCategory(category).then((response) => {
				set((state) => ({ aspects: { ...state.aspects, [category]: response.data.items } }));
			});
		}
	},
	setLoading: (loading) => set({ loading }),
}));
