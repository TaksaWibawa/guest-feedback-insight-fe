import { APISentimentAnalytics } from '@/apis';
import { ChartWordCloud } from '../chart';
import { useCategoriesStore, useWordcloudStore } from '@/stores';
import { useState } from 'react';
import { CardBase } from './CardBase';

export function CardTopPhrases({ chartData, options }) {
  const { categories } = useCategoriesStore();
  const { loading: loadingWordcloud } = useWordcloudStore();

  const [selectedOption, setSelectedOption] = useState(options[0]?.name);
  const [data, setData] = useState(chartData);

  const handleCategoryChange = (value) => {
    setSelectedOption(value);
    APISentimentAnalytics.getSentimentWordcloud(
      categories.find((category) => category?.name === value).id
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <CardBase
      title={'Most Frequent Phrases'}
      subTitle={`Showing most frequent phrases for ${selectedOption}`}
      filterOptions={options}
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
