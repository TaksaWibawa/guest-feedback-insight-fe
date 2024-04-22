import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
	user: {},
	isAuthenticated: false,
	isLoading: true,
};

export const useAuthStore = create(
	persist(
		(set) => ({
			...initialState,
			setAccessToken: (accessToken) => set((state) => ({ user: { ...state.user, accessToken } })),
			setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
			setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
			setLoading: (isLoading) => set({ isLoading }),
			logout: () => {
				set({ ...initialState });
				sessionStorage.removeItem('auth-storage');
			},
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => sessionStorage),
			partialize: (state) => ({ user: state.user }),
		}
	)
);
