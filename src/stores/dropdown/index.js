import { create } from 'zustand';

export const useDropdownStore = create((set) => ({
	vendor: 'airbnb',
	timePeriod: 'year',
	setVendor: (vendor) => set({ vendor }),
	setTimePeriod: (timePeriod) => set({ timePeriod }),
}));
