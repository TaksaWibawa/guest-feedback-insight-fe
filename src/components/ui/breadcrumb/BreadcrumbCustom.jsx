import { capitalizeSentence } from '@/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';

export function BreadcrumbCustom({ path }) {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<BiChevronRight color="#8D8D8D" />}
      ml={'0.1rem'}
    >
      {path.map((value, index) => {
        const isLastIndex = index === path.length - 1;

        return (
          <BreadcrumbItem
            key={index}
            isCurrentPage={isLastIndex}
            fontWeight={isLastIndex ? 'semibold' : 'normal'}
            fontSize={'xs'}
            color={isLastIndex ? 'brand.500' : 'customGray.300'}
          >
            <BreadcrumbLink
              textDecoration={isLastIndex && 'underline'}
              _hover={{
                cursor: 'default',
              }}
            >
              {value === '' ? 'Dashboard' : capitalizeSentence(value)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
