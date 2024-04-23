import { useAuthStore } from '@/stores';
import { useEffect } from 'react';

export function useAuth() {
  const { user, isAuthenticated, isLoading, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return { user, isAuthenticated, isLoading };
}
