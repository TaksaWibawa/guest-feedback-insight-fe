import { CardRating, CardSentiment } from '@/components/ui/card';
import { Grid, GridItem } from '@chakra-ui/react';
import { useStatisticsStore } from '@/stores';
import { LoadingBase } from '@/components/ui/loading';

export function SectionStatistics() {
	const { statistics, loading } = useStatisticsStore();

	return (
		<Grid
			templateColumns={'60% 38%'}
			gap={'2%'}
		>
			<GridItem>
				{loading ? (
					<LoadingBase
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
