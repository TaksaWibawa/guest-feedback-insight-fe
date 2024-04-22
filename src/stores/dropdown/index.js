import { create } from 'zustand';

export const useDropdownStore = create((set) => ({
	vendor: 'booking.com',
	setVendor: (vendor) => set({ vendor }),
}));
