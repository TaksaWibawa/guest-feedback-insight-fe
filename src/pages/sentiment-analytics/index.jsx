import { APISentimentAnalytics } from '@/apis';
import { DashboardLayout } from '@/layout';
import { SectionScores, SectionStatistics } from '@/components/dashboard/sentiment-analytics';
import { useCategoriesStore, useStatisticsStore } from '@/stores';
import { useEffect } from 'react';

export function PageSentimentAnalytics() {
	const { setCategories, setLoading: setCategoriesLoading, resetCategoriesStore } = useCategoriesStore();
	const { setStatistics, setLoading: setStatisticLoading, resetStatisticsStore } = useStatisticsStore();

	useEffect(() => {
		const fetchCategories = async () => {
			setCategoriesLoading(true);
			try {
				const response = await APISentimentAnalytics.getCategories();
				setCategories(response.data);
			} catch (error) {
				setCategories([]);
				throw new Error(error);
			} finally {
				setCategoriesLoading(false);
			}
		};

		fetchCategories();

		return () => {
			resetCategoriesStore();
		};
	}, [setCategories, setCategoriesLoading, resetCategoriesStore]);

	useEffect(() => {
		const fetchStatistics = async () => {
			setStatisticLoading(true);
			try {
				const response = await APISentimentAnalytics.getSentimentStatistics();
				setStatistics(response.data);
			} catch (error) {
				setStatistics({});
				throw new Error(error);
			} finally {
				setStatisticLoading(false);
			}
		};

		fetchStatistics();

		return () => {
			resetStatisticsStore();
		};
	}, [setStatistics, setStatisticLoading, resetStatisticsStore]);

	return (
		<DashboardLayout
			title={'Sentiment Analytics'}
			gap={{ base: '5rem', xl: '2rem' }}
		>
			<SectionStatistics />
			<SectionScores />
		</DashboardLayout>
	);
}
