import { Box } from '@chakra-ui/react';
import { scaleLog } from '@visx/scale';
import { Text as WordcloudText } from '@visx/text';
import { memo, useEffect, useMemo, useState } from 'react';
import { useParentSize } from '@visx/responsive';
import { Wordcloud } from '@visx/wordcloud';

const fixedRandomGenerator = () => 0.5;

export const ChartWordCloud = memo(({ parentWidth, parentHeight, words, wordPadding }) => {
	const { parentRef, width, height } = useParentSize();

	const [minVal, setMinVal] = useState(0);
	const [maxVal, setMaxVal] = useState(0);

	useEffect(() => {
		const newMinVal = Math.min(...words.map((w) => w.value));
		const newMaxVal = Math.max(...words.map((w) => w.value));

		setMinVal(newMinVal);
		setMaxVal(newMaxVal);
	}, [words]);

	const handlePolarityColor = (polarity) => {
		switch (polarity) {
			case 'positive':
				return 'green';
			case 'negative':
				return 'red';
			case 'neutral':
				return 'gray';
			default:
				return 'black';
		}
	};

	const fontScale = useMemo(() => {
		return scaleLog({
			domain: [minVal, maxVal],
			range: [20, 100],
		});
	}, [minVal, maxVal]);

	const fontSizeSetter = (datum) => fontScale(datum.value);

	return (
		<Box
			width={parentWidth || '100%'}
			height={parentHeight || '200px'}
			ref={parentRef}
		>
			<Wordcloud
				words={words}
				width={width}
				height={height}
				fontSize={fontSizeSetter}
				font={'Impact'}
				padding={wordPadding || 1}
				spiral={'archimedean'}
				rotate={0}
				random={fixedRandomGenerator}
			>
				{(cloudWords) =>
					cloudWords.map((w, i) => (
						<WordcloudText
							key={`word-${w.text}-${i}`}
							fill={handlePolarityColor(w.polarity?.toLowerCase())}
							textAnchor={'middle'}
							transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
							fontSize={w.size}
							fontFamily={w.font}
						>
							{w.text}
						</WordcloudText>
					))
				}
			</Wordcloud>
		</Box>
	);
});

ChartWordCloud.displayName = 'ChartWordCloud';
