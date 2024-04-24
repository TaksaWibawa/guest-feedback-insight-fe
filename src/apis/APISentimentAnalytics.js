import { AxiosError } from 'axios';
import { axiosInstance } from '../configs/axios';

export const APISentimentAnalytics = {
  getSentimentCategories: async () => {
    try {
      const response = await axiosInstance.get('/sentiment/categories');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
      throw new Error(error.message);
    }
  },
  getSentimentAnalytics: async () => {
    try {
      const response = await axiosInstance.get('/sentiment/analytics');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
      throw new Error(error.message);
    }
  },
  getSentimentStatistics: async () => {
    try {
      const response = await axiosInstance.get('/sentiment/statistics');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
      throw new Error(error);
    }
  },
  getSentimentWordcloud: async ({ categoryId }) => {
    try {
      const response = await axiosInstance.get(`/sentiment/word-cloud/${categoryId}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
      throw new Error(error.message);
    }
  },
};
