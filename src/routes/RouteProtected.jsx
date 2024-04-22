import { LoadingOverlay } from '@/components/ui/loading';
import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export function RouteProtected() {
	const { isAuthenticated, isLoading } = useAuth();

	// if (isLoading) {
	// 	return <LoadingOverlay />;
	// }

	// return !isAuthenticated ? (
	// 	<Outlet />
	// ) : (
	// 	<Navigate
	// 		to="/sentiment-analytics"
	// 		replace
	// 	/>
	// );

	return <Outlet />;
}
