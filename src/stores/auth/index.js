import { firebaseAuth } from '@/configs';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
  user: {},
  isLoading: true,
  isAuthenticated: false,
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      getAccessToken: () => get().user.accessToken,
      logout: () => {
        set({ ...initialState });
        sessionStorage.removeItem('auth-storage');
      },
      initialize: () => {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            const userData = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              phoneNumber: user.phoneNumber,
              accessToken: user.stsTokenManager.accessToken,
            };
            set({ user: userData, isAuthenticated: true, isLoading: false });
          } else {
            set({ user: {}, isAuthenticated: false, isLoading: false });
          }
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);
