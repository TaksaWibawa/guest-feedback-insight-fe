/* eslint-disable no-undef */
import { useAuthStore } from '@/stores';
import { globalRoute } from '@/utils';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().user.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      globalRoute.navigate && globalRoute.navigate('/unauthorized');
    }

    return Promise.reject(error);
  }
);
