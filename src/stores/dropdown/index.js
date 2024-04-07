import { create } from 'zustand';

export const useDropdownStore = create((set) => ({
	vendor: 'airbnb',
	setVendor: (vendor) => set({ vendor }),
}));
