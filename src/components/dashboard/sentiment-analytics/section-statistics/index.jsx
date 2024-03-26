import { CardRating, CardSentiment } from '@/components/ui/card';
import { Grid, GridItem } from '@chakra-ui/react';
import { LoadingCustom } from '@/components/ui/loading';
import { useStatisticsStore } from '@/stores';

export function SectionStatistics() {
	const { statistics, loading } = useStatisticsStore();

	return (
		<Grid
			templateColumns={'60% 38%'}
			gap={'2%'}
		>
			<GridItem>
				{loading ? (
					<LoadingCustom
						width={'100%'}
						height={'300px'}
						boxShadow={'md'}
					/>
				) : (
					<CardSentiment
						currentPeriodData={Object.values(statistics.currPeriodData)}
						lastPeriodData={Object.values(statistics.lastPeriodData)}
					/>
				)}
			</GridItem>
			<GridItem>
				<CardRating
					currentRating={4.4}
					previousRating={2.7}
					totalReviewers={10000}
				/>
			</GridItem>
		</Grid>
	);
}
