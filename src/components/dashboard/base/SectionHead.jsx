import { Flex, Heading } from '@chakra-ui/react';
import { usePathnameToArray } from '@/hooks';
import { BreadcrumbCustom } from '@/components/ui';

export function SectionHead({ title }) {
  const pathname = usePathnameToArray();

  return (
    <Flex
      flexDirection={'column'}
      gap={'1rem'}
    >
      <BreadcrumbCustom path={pathname} />
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Heading>{title || 'No Title'}</Heading>
      </Flex>
    </Flex>
  );
}
