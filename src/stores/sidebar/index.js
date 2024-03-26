import { create } from 'zustand';

export const useSidebarStore = create((set) => ({
	isCollapsed: true,
	setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
}));
