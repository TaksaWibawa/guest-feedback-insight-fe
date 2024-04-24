import { createToastStore } from '@/stores';
import { useToast } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

export function ToastResponse() {
  const toast = useToast();
  const { status, title, message } = createToastStore();
  const { resetToast } = createToastStore();

  const toastRef = useRef();

  useEffect(() => {
    if (status && title && message) {
      if (toastRef.current) {
        toast.close(toastRef.current);
      }

      toastRef.current = toast({
        title: title,
        description: message,
        status: STATUS[status],
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });

      resetToast();
    }
  }, [status, title, message, toast, resetToast]);

  return null;
}
