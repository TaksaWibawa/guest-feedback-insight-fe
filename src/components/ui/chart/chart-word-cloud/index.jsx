import { Box } from '@chakra-ui/react';
import { scaleLinear } from '@visx/scale';
import { Text as WordcloudText } from '@visx/text';
import { useParentSize } from '@visx/responsive';
import { Wordcloud } from '@visx/wordcloud';

const fixedRandomGenerator = () => 0.5;

export function ChartWordCloud({ parentWidth, parentHeight, words, colors, wordPadding }) {
	const { parentRef, width, height } = useParentSize();

	const wordsArray = words.split(' ');

	const wordFreq = (arr) => {
		const freqMap = {};

		for (const w of arr) {
			if (!freqMap[w]) freqMap[w] = 0;
			freqMap[w] += 1;
		}
		return Object.keys(freqMap).map((word) => ({ text: word, value: freqMap[word] }));
	};

	const fontScale = scaleLinear({
		domain: [Math.min(...wordsArray.map((w) => w.length)), Math.max(...wordsArray.map((w) => w.length))],
		range: [25, 100],
	});

	const fontSizeSetter = (datum) => fontScale(datum.value);

	return (
		<Box
			width={parentWidth || '100%'}
			height={parentHeight || '300px'}
			ref={parentRef}
		>
			<Wordcloud
				words={wordFreq(wordsArray)}
				width={width}
				height={height}
				fontSize={fontSizeSetter}
				font={'Impact'}
				padding={wordPadding || 1}
				spiral={'rectangular'}
				rotate={0}
				random={fixedRandomGenerator}
			>
				{(cloudWords) =>
					cloudWords.map((w, i) => (
						<WordcloudText
							key={w.text}
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
}
