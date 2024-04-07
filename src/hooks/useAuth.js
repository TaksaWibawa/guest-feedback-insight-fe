import { useEffect } from 'react';
import { firebaseAuth } from '@/configs';
import { useAuthStore } from '@/stores';
import { APIAuth } from '@/apis';

export function useAuth() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const isLoading = useAuthStore((state) => state.loading);
	const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
	const setLoading = useAuthStore((state) => state.setLoading);
	const setUser = useAuthStore((state) => state.setUser);
	const user = useAuthStore((state) => state.user);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
			if (user) {
				APIAuth.getCurrentUser().then((userData) => {
					setUser(userData);
					setAuthenticated(true);
					setLoading(false);
				});
			} else {
				setUser(null);
				setAuthenticated(false);
				setLoading(false);
			}
		});

		return () => unsubscribe();
	}, [setUser, setAuthenticated, setLoading]);

	return { user, isAuthenticated, isLoading };
}
