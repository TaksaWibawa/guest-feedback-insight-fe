import { Box, Tooltip } from '@chakra-ui/react';

export function ChartSentimentColor({ label, bgColor, currentCount, totalCount }) {
	const calculateWidth = (target, total) => {
		return (target / total) * 100;
	};

	return (
		<Tooltip
			label={label}
			aria-label={label}
			placement="top"
		>
			<Box
				width={`${calculateWidth(currentCount, totalCount)}%`}
				backgroundColor={bgColor}
			/>
		</Tooltip>
	);
}
