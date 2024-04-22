import { ChartSentimentColor, SkeletonTableRow, TableBase } from '@/components/ui';
import { Flex, Td, Tr } from '@chakra-ui/react';
import { useAnalyticsStore } from '@/stores';

const TABLE_COLUMNS = ['category', 'mentions', 'positive', 'negative', 'neutral'];

export function SectionScores() {
  const { analytics, loading } = useAnalyticsStore();

  return (
    <TableBase
      heads={TABLE_COLUMNS}
      variant={'simple'}
    >
      {!loading ? (
        analytics?.map((item, index) => {
          const totalCount = item.positive + item.negative + item.neutral;

          return (
            <Tr
              key={`${item.category}-${index}`}
              bgColor={'white'}
              fontSize={'0.875rem'}
              fontWeight={'semibold'}
              textTransform={'capitalize'}
              _hover={{
                bgColor: 'brand.500',
                color: 'white',
              }}
            >
              <Td whiteSpace={'nowrap'}>
                <Flex
                  gap={'0.25rem'}
                  alignItems={'center'}
                >
                  {item.category}
                </Flex>
              </Td>
              <Td>
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Flex
                    width={'80%'}
                    height={'0.75rem'}
                  >
                    <ChartSentimentColor
                      label={'Positive'}
                      bgColor={'#4bfa00'}
                      currentCount={item.positive}
                      totalCount={totalCount}
                    />
                    <ChartSentimentColor
                      label={'Neutral'}
                      bgColor={'lightGray'}
                      currentCount={item.neutral}
                      totalCount={totalCount}
                    />
                    <ChartSentimentColor
                      label={'Negative'}
                      bgColor={'#ff0505'}
                      currentCount={item.negative}
                      totalCount={totalCount}
                    />
                  </Flex>
                  {totalCount}
                </Flex>
              </Td>
              <Td>{item.positive}</Td>
              <Td>{item.negative}</Td>
              <Td>{item.neutral}</Td>
            </Tr>
          );
        })
      ) : (
        <SkeletonTableRow
          row={8}
          cell={7}
          width={'100%'}
          height={'1rem'}
        />
      )}
    </TableBase>
  );
}
