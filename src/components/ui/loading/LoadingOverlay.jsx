import { Box } from '@chakra-ui/react';
import { LoadingBase } from '.';
import { useEffect } from 'react';

export function LoadingOverlay({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="modal"
    >
      <LoadingBase />
    </Box>
  );
}
