import { APISentimentAnalytics } from '@/apis';
import { DashboardLayout } from '@/layout';
import { SectionScores, SectionStatistics } from '@/components/dashboard/sentiment-analytics';
import { useCategoriesStore, useStatisticsStore } from '@/stores';
import { useEffect } from 'react';

export function PageSentimentAnalytics() {
	const { setShowAspects, setCategories, setLoading: setCategoriesLoading } = useCategoriesStore();
	const { setStatistics, setLoading: setStatisticLoading } = useStatisticsStore();

	useEffect(() => {
		APISentimentAnalytics.getCategories().then((response) => {
			setCategories(response.data);
			setShowAspects(Array(response.length).fill(false));
			setCategoriesLoading(false);
		});
	}, [setCategories, setCategoriesLoading, setShowAspects]);

	useEffect(() => {
		APISentimentAnalytics.getSentimentStatistics().then((response) => {
			setStatistics(response.data);
			setStatisticLoading(false);
		});
	}, [setStatistics, setStatisticLoading]);

	return (
		<DashboardLayout
			title={'Sentiment Analytics'}
			gap={'2rem'}
		>
			<SectionStatistics />
			<SectionScores />
		</DashboardLayout>
	);
}
