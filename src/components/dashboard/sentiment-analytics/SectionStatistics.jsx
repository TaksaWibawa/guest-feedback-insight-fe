/* eslint-disable react-hooks/exhaustive-deps */
import { APISentimentAnalytics } from '@/apis';
import { CardSentiment, CardTopPhrases, LoadingBase } from '@/components/ui';
import { Grid, GridItem } from '@chakra-ui/react';
import { useApiCall } from '@/hooks';
import { useEffect } from 'react';
import { useCategoriesStore, useStatisticsStore, useWordcloudStore } from '@/stores';

export function SectionStatistics() {
  const { categories, setCategories, resetCategoriesStore } = useCategoriesStore();
  const { statistics, setStatistics, resetStatisticsStore } = useStatisticsStore();
  const { wordcloud, setWordcloud, resetWordcloudStore } = useWordcloudStore();

  const [fetchStatistics, loadingStatistics] = useApiCall(
    APISentimentAnalytics.getSentimentStatistics
  );
  const [fetchCategories, loadingCategories] = useApiCall(
    APISentimentAnalytics.getSentimentCategories
  );
  const [fetchWordcloud, loadingWordcloud] = useApiCall(
    APISentimentAnalytics.getSentimentWordcloud
  );

  useEffect(() => {
    (async () => {
      const response = await fetchStatistics({}, false);
      setStatistics(response);

      const categories = await fetchCategories({}, false);
      setCategories(categories);
      if (categories.length > 0) {
        const wordcloud = await fetchWordcloud({ categoryId: categories[0].id }, false);
        setWordcloud(wordcloud);
      }
    })();

    return () => {
      resetStatisticsStore();
      resetWordcloudStore();
      resetCategoriesStore();
    };
  }, [
    setStatistics,
    resetStatisticsStore,
    setCategories,
    resetCategoriesStore,
    setWordcloud,
    resetWordcloudStore,
  ]);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        xl: '1fr 1fr',
      }}
      gap={{ base: '2rem', xl: '1rem' }}
    >
      <GridItem colSpan={1}>
        {loadingStatistics && (
          <LoadingBase
            width={'100%'}
            height={'25rem'}
            boxShadow={'md'}
          />
        )}
        {!loadingStatistics && statistics?.length > 0 && <CardSentiment chartData={statistics} />}
        {!loadingStatistics && statistics?.length === 0 && (
          <CardSentiment chartData={[{ sentiment: 'null', count: 1 }]} />
        )}
      </GridItem>
      <GridItem colSpan={1}>
        {loadingWordcloud && loadingCategories && (
          <LoadingBase
            width={'100%'}
            height={'25rem'}
            boxShadow={'md'}
          />
        )}
        {!loadingWordcloud && !loadingCategories && wordcloud.length > 0 && (
          <CardTopPhrases
            chartData={wordcloud}
            categories={categories}
          />
        )}
        {!loadingWordcloud && !loadingCategories && wordcloud.length === 0 && (
          <CardTopPhrases
            chartData={[{ text: 'No Data', value: 1, polarity: 'neutral' }]}
            categories={[{ id: '-1', name: 'No Category' }]}
          />
        )}
      </GridItem>
    </Grid>
  );
}
