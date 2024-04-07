import { CardSentiment, CardTopPhrases } from '@/components/ui/card';
import { Grid, GridItem } from '@chakra-ui/react';
import { useStatisticsStore } from '@/stores';
import { LoadingBase } from '@/components/ui/loading';

export function SectionStatistics() {
	const { statistics, loading } = useStatisticsStore();

	return (
		<Grid
			templateColumns={{
				base: '1fr',
				xl: '1fr 1fr',
			}}
			gap={{ base: '2rem', xl: '1rem' }}
		>
			<GridItem colSpan={1}>
				{loading ? (
					<LoadingBase
						width={'100%'}
						height={'300px'}
						boxShadow={'md'}
					/>
				) : (
					<CardSentiment chartData={Object.values(statistics.currPeriodData)} />
				)}
			</GridItem>
			<GridItem colSpan={1}>
				<CardTopPhrases />
			</GridItem>
		</Grid>
	);
}
