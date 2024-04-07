import { Box } from '@chakra-ui/react';
import { scaleLog } from '@visx/scale';
import { Text as WordcloudText } from '@visx/text';
import { memo, useEffect, useMemo, useState } from 'react';
import { useParentSize } from '@visx/responsive';
import { Wordcloud } from '@visx/wordcloud';

const fixedRandomGenerator = () => 0.5;

export const ChartWordCloud = memo(({ parentWidth, parentHeight, words, colors, wordPadding }) => {
	const { parentRef, width, height } = useParentSize();

	const [minVal, setMinVal] = useState(0);
	const [maxVal, setMaxVal] = useState(0);

	useEffect(() => {
		const newMinVal = Math.min(...words.map((w) => w.value));
		const newMaxVal = Math.max(...words.map((w) => w.value));

		setMinVal(newMinVal);
		setMaxVal(newMaxVal);
	}, [words]);

	const fontScale = useMemo(() => {
		const minFontSize = height * 0.02;
		const maxFontSize = height * 0.1;
		return scaleLog({
			domain: [minVal, maxVal],
			range: [minFontSize, maxFontSize],
		});
	}, [minVal, maxVal, height]);

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
							fill={colors[i % colors.length]}
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
