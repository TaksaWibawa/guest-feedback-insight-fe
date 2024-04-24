import { APIGuestReviews } from '@/apis';
import { DashboardLayout } from '@/layout';
import { createToastStore, useScrappingStore } from '@/stores';
import { Center, VStack, IconButton, Heading } from '@chakra-ui/react';
import { MdWarning } from 'react-icons/md';

const RESPONSE_TEXT = {
  SUCCESS: 'Scrapping process has been started successfully',
  ERROR: 'Failed to start scrapping process. Error message:',
  LOADING: 'Scrapping in progress...',
  BUTTON_TEXT: 'Click the button to start scrapping',
};

export function PageScrapping() {
  const { isLoading, setIsLoading } = useScrappingStore();
  const { setToast } = createToastStore();

  const handleScrapping = async () => {
    setIsLoading(true);
    try {
      await APIGuestReviews.startScrapping();
      setToast({
        status: 'SUCCESS',
        title: 'Success',
        message: RESPONSE_TEXT.SUCCESS,
      });
    } catch (error) {
      setToast({
        status: 'ERROR',
        title: 'Error',
        message: `${RESPONSE_TEXT.ERROR} ${error || 'Something went wrong'}`,
      });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout title={'Scrapping'}>
      <Center minH="75vh">
        <VStack spacing={5}>
          <IconButton
            aria-label="Start scrapping"
            icon={<MdWarning size={100} />}
            colorScheme="red"
            isRound
            padding={10}
            size="xl"
            onClick={handleScrapping}
            isLoading={isLoading}
          />
          <Heading
            as="h2"
            size="lg"
          >
            {isLoading && RESPONSE_TEXT.LOADING}
            {!isLoading && RESPONSE_TEXT.BUTTON_TEXT}
          </Heading>
        </VStack>
      </Center>
    </DashboardLayout>
  );
}
