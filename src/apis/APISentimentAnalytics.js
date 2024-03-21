import { axiosInstance } from '../configs/axios';

export const APISentimentAnalytics = {
	getCategories: async () => {
		try {
			const response = await axiosInstance.get('/sentiment-analytics');
			return response.data;
		} catch (error) {
			console.error('Error:', error);
		}
	},
	getAspectsByCategory: async (category) => {
		try {
			const response = await axiosInstance.get(`/sentiment-analytics/${category}`);
			return response.data;
		} catch (error) {
			console.error('Error:', error);
		}
	},
	getSentimentStatistics: async () => {
		try {
			const response = await axiosInstance.get('/sentiment-statistics');
			console.log('response:', response);
			return response.data;
		} catch (error) {
			console.error('Error:', error);
		}
	},
};
