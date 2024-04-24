/* eslint-disable react-hooks/exhaustive-deps */
import { APISentimentAnalytics } from '@/apis';
import { ChartSentimentColor, SkeletonTableRow, TableBase } from '@/components/ui';
import { Flex, Td, Tr } from '@chakra-ui/react';
import { useAnalyticsStore } from '@/stores';
import { useApiCall } from '@/hooks';
import { useEffect } from 'react';

const TABLE_COLUMNS = ['category', 'mentions', 'positive', 'negative', 'neutral'];

export function SectionScores() {
  const { analytics, setAnalytics } = useAnalyticsStore();

  const [fetchAnalytics, loading] = useApiCall(APISentimentAnalytics.getSentimentAnalytics);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchAnalytics({}, false);
        setAnalytics(response);
      } catch (error) {
        setAnalytics([]);
        throw new Error(error);
      }
    })();
  }, [setAnalytics]);

  return (
    <TableBase
      heads={TABLE_COLUMNS}
      variant={'simple'}
      propsTable={{
        textAlign: 'center',
      }}
    >
      {loading && (
        <SkeletonTableRow
          row={8}
          cell={7}
          width={'100%'}
          height={'1rem'}
        />
      )}
      {!loading && analytics.length > 0 ? (
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
              <Td
                whiteSpace="nowrap"
                textAlign="center"
                w="15%"
              >
                {item.category}
              </Td>
              <Td
                whiteSpace="nowrap"
                textAlign="center"
                w="50%"
              >
                <Flex
                  w={'100%'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={'3rem'}
                >
                  <Flex
                    minW={'90%'}
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
              <Td
                whiteSpace="nowrap"
                textAlign="center"
                w="10%"
                maxW="10%"
              >
                {item.positive}
              </Td>
              <Td
                whiteSpace="nowrap"
                textAlign="center"
                w="10%"
                maxW="10%"
              >
                {item.negative}
              </Td>
              <Td
                whiteSpace="nowrap"
                textAlign="center"
                w="10%"
                maxW="10%"
              >
                {item.neutral}
              </Td>
            </Tr>
          );
        })
      ) : (
        <Tr>
          <Td
            colSpan={5}
            textAlign="center"
            fontSize="1rem"
          >
            No data available
          </Td>
        </Tr>
      )}
    </TableBase>
  );
}
