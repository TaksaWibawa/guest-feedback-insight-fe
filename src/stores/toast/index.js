import { create } from 'zustand';

const initialState = {
  status: null,
  title: '',
  message: '',
};

export const createToastStore = create((set) => ({
  ...initialState,
  setToast: ({ status, title, message }) => set({ status, title, message }),
  resetToast: () => set(initialState),
}));
