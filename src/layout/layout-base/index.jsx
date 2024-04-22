import { NavigationDesktop } from '@/components/ui';
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

export function LayoutBase({ children }) {
  const [isLargerThanLaptopXL] = useMediaQuery('(min-width: 80em)');
  return (
    <Grid
      templateColumns={'0fr 1fr'}
      maxW={'100vw'}
      padding={0}
    >
      <GridItem colSpan={1}>{isLargerThanLaptopXL && <NavigationDesktop />}</GridItem>
      <GridItem colSpan={1}>{children}</GridItem>
    </Grid>
  );
}
