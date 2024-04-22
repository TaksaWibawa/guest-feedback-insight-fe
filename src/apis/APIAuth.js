import { AxiosError } from 'axios';
import { axiosInstance, firebaseAuth } from '@/configs';
import { FirebaseError } from 'firebase/app';
import { signOut } from 'firebase/auth';

export const APIAuth = {
	loginViaEmail: async ({ email, password }) => {
		try {
			const response = await axiosInstance.post('/auth/login', { email, password });
			return response.data;
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			} else if (error instanceof AxiosError) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error(error.message);
			}
		}
	},

	registerViaEmail: async ({ email, password, displayName, phoneNumber }) => {
		try {
			const userData = { email, password, displayName, phoneNumber };

			const response = await axiosInstance.post('/auth/register', userData);
			return response.data;
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			} else if (error instanceof AxiosError) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error(error.message);
			}
		}
	},

	getCurrentUser: async () => {
		try {
			const response = await axiosInstance.get('/auth/user');
			return response.data;
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			} else if (error instanceof AxiosError) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error(error.message);
			}
		}
	},

	logout: async () => {
		try {
			await signOut(firebaseAuth);
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			} else if (error instanceof AxiosError) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error(error.message);
			}
		}
	},
};
