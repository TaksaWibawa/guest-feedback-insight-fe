import { CardSentiment, CardTopPhrases, LoadingBase } from '@/components/ui';
import { Grid, GridItem } from '@chakra-ui/react';
import { useCategoriesStore, useStatisticsStore, useWordcloudStore } from '@/stores';

export function SectionStatistics() {
  const { categories } = useCategoriesStore();
  const { statistics, loading: loadingStatistics } = useStatisticsStore();
  const { wordcloud, loading: loadingWordcloud } = useWordcloudStore();

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        xl: '1fr 1fr',
      }}
      gap={{ base: '2rem', xl: '1rem' }}
    >
      <GridItem colSpan={1}>
        {loadingStatistics ? (
          <LoadingBase
            width={'100%'}
            height={'full'}
            boxShadow={'md'}
          />
        ) : (
          statistics.length > 0 && <CardSentiment chartData={statistics} />
          // add mock for no data
        )}
      </GridItem>
      <GridItem colSpan={1}>
        {loadingWordcloud ? (
          <LoadingBase
            width={'100%'}
            height={'full'}
            boxShadow={'md'}
          />
        ) : (
          wordcloud.length > 0 && (
            <CardTopPhrases
              chartData={wordcloud}
              options={categories}
            />
          )
          // add mock for no data
        )}
      </GridItem>
    </Grid>
  );
}
