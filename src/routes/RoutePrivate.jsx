import { LoadingOverlay } from '@/components/ui/loading';
import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export function RoutePrivate() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingOverlay isLoading={isLoading} />;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/unauthorized"
      replace
    />
  );
}
