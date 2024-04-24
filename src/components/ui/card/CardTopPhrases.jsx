import { APISentimentAnalytics } from '@/apis';
import { ChartWordCloud } from '../chart';
import { useState } from 'react';
import { CardBase } from './CardBase';
import { useApiCall } from '@/hooks';

export function CardTopPhrases({ chartData, categories }) {
  const [selectedOption, setSelectedOption] = useState(categories[0]?.name);
  const [data, setData] = useState(chartData);

  const [fetchWordcloud, loadingWordcloud] = useApiCall(
    APISentimentAnalytics.getSentimentWordcloud
  );

  const handleCategoryChange = async (value) => {
    setSelectedOption(value);
    try {
      const response = await fetchWordcloud({
        categoryId: categories.find((c) => c.name === value).id,
      });
      setData(response);
    } catch (error) {
      setData([]);
      throw new Error(error);
    }
  };

  return (
    <CardBase
      title={'Most Frequent Phrases'}
      subTitle={`Showing most frequent phrases for ${selectedOption}`}
      filterOptions={categories}
      propsTitle={{
        textAlign: 'left',
      }}
      propsDropdown={{
        defaultValue: selectedOption,
        onChange: handleCategoryChange,
        isLoading: false,
      }}
    >
      {!loadingWordcloud ? (
        <ChartWordCloud
          words={data}
          parentHeight={'15rem'}
        />
      ) : null}
    </CardBase>
  );
}
