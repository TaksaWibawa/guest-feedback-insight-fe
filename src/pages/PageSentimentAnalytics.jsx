import { APISentimentAnalytics } from '@/apis';
import { DashboardLayout } from '@/layout';
import { SectionScores, SectionStatistics } from '@/components/dashboard/sentiment-analytics';
import { useAnalyticsStore, useCategoriesStore, useStatisticsStore, useWordcloudStore } from '@/stores';
import { useEffect } from 'react';

export function PageSentimentAnalytics() {
	const { setCategories, setLoading: setCategoriesLoading, resetCategoriesStore } = useCategoriesStore();
	const { setAnalytics, setLoading: setAnalyticsLoading, resetAnalyticsStore } = useAnalyticsStore();
	const { setStatistics, setLoading: setStatisticLoading, resetStatisticsStore } = useStatisticsStore();
	const { setWordcloud, setLoading: setWordcloudLoading, resetWordcloudStore } = useWordcloudStore();

	useEffect(() => {
		const fetchAnalytics = async () => {
			setAnalyticsLoading(true);
			try {
				const response = await APISentimentAnalytics.getSentimentAnalytics();
				setAnalytics(response.data);
			} catch (error) {
				setAnalytics([]);
			} finally {
				setAnalyticsLoading(false);
			}
		};

		fetchAnalytics();

		return () => {
			resetAnalyticsStore();
		};
	}, [setAnalytics, setAnalyticsLoading, resetAnalyticsStore]);

	useEffect(() => {
		const fetchStatistics = async () => {
			setStatisticLoading(true);
			try {
				const response = await APISentimentAnalytics.getSentimentStatistics();
				setStatistics(response.data);
			} catch (error) {
				setStatistics({});
			} finally {
				setStatisticLoading(false);
			}
		};

		fetchStatistics();

		return () => {
			resetStatisticsStore();
		};
	}, [setStatistics, setStatisticLoading, resetStatisticsStore]);

	useEffect(() => {
		const fetchWordcloud = async (category) => {
			setWordcloudLoading(true);
			try {
				const response = await APISentimentAnalytics.getSentimentWordcloud(category);
				setWordcloud(response.data);
			} catch (error) {
				setWordcloud([]);
			} finally {
				setWordcloudLoading(false);
			}
		};

		const fetchCategory = async () => {
			setCategoriesLoading(true);
			try {
				const response = await APISentimentAnalytics.getSentimentCategories();
				setCategories(response.data);
				fetchWordcloud(response.data[0].id);
			} catch (error) {
				setCategories([]);
			} finally {
				setCategoriesLoading(false);
			}
		};

		fetchCategory();

		return () => {
			resetCategoriesStore();
			resetWordcloudStore();
		};
	}, [setWordcloud, setWordcloudLoading, resetWordcloudStore, setCategories, setCategoriesLoading, resetCategoriesStore]);

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
