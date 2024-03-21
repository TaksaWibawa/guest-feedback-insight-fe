import { APISentimentAnalytics } from '@/apis';
import { SectionStatistics, SectionTable } from '@/components/dashboard/section';
import { DashboardLayout } from '@/layout';
import { useCategoriesStore, useStatisticsStore } from '@/stores';
import { useEffect } from 'react';

export function GuestReviewPage() {
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
			title={'Guest Review'}
			gap={'2rem'}
		>
			<SectionStatistics />
			<SectionTable />
		</DashboardLayout>
	);
}
