import { AxiosError } from 'axios';
import { axiosInstance, firebaseAuth } from '@/configs';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const APIAuth = {
	loginViaEmail: async ({ email, password }) => {
		try {
			const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
			const userData = {
				uid: response.user.uid,
				email: response.user.email,
				displayName: response.user.displayName,
				photoURL: response.user.photoURL,
				phoneNumber: response.user.phoneNumber,
				accessToken: response.user.stsTokenManager.accessToken,
			};

			return userData;
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

			const response = await axiosInstance.post('/auth/register-via-email', userData);
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
			const response = firebaseAuth.currentUser;
			const userData = {
				uid: response.uid,
				email: response.email,
				displayName: response.displayName,
				photoURL: response.photoURL,
				phoneNumber: response.phoneNumber,
				accessToken: response.stsTokenManager.accessToken,
			};
			return userData;
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
