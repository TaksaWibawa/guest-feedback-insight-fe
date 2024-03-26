import { AxiosError } from 'axios';
import { axiosInstance } from '../configs/axios';

export const APIGuestReviews = {
	getReviews: async (listing_id, vendor, query) => {
		try {
			const response = await axiosInstance.get(`/guest-reviews/${listing_id}/vendors/${vendor}`, { params: query });
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},

	getReviewDetails: async (listingId, vendor, reviewId) => {
		try {
			const response = await axiosInstance.get(`/guest-reviews/${listingId}/vendors/${vendor}/reviews/${reviewId}`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},
};
