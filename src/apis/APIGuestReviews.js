import { AxiosError } from 'axios';
import { axiosInstance } from '../configs/axios';

export const APIGuestReviews = {
  getReviews: async (query) => {
    try {
      const response = await axiosInstance.get(`/reviews`, { params: query });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw new Error(error.message);
    }
  },

  getReviewDetails: async (reviewId) => {
    try {
      const response = await axiosInstance.get(`/reviews/detail/${reviewId}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw new Error(error.message);
    }
  },

  startScrapping: async () => {
    try {
      const response = await axiosInstance.post('/reviews-analysis', null, {
        // eslint-disable-next-line no-undef
        baseURL: process.env.VITE_SCRAPING_API_URL,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw new Error(error.message);
    }
  },
};
