import { AxiosError } from 'axios';
import { axiosInstance } from '../configs/axios';

export const APISentimentAnalytics = {
	getCategories: async () => {
		try {
			const response = await axiosInstance.get('/sentiment-analytics');
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data);
			}
		}
	},
	getAspectsByCategory: async (category) => {
		try {
			const response = await axiosInstance.get(`/sentiment-analytics/${category}`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data);
			}
		}
	},
	getSentimentStatistics: async () => {
		try {
			const response = await axiosInstance.get('/sentiment-statistics');
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data);
			}
		}
	},
};
