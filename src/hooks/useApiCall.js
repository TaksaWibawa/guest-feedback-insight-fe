import { createToastStore } from '@/stores';
import { useState } from 'react';

export function useApiCall(apiFunction) {
  const [loading, setLoading] = useState(false);
  const { setToast } = createToastStore();

  async function call(params = {}, showSuccessToast = false) {
    setLoading(true);
    try {
      const response = await apiFunction(params);
      if (showSuccessToast) {
        setToast({
          status: 'SUCCESS',
          title: 'Success',
          message: response.message || 'Operation successful',
        });
      }
      return response.data;
    } catch (error) {
      setToast({
        status: 'ERROR',
        title: 'Error',
        message: error.message || 'Operation failed',
      });
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return [call, loading];
}
