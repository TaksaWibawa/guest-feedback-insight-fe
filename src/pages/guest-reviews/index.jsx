import { APIGuestReviews } from '@/apis';
import { SectionReviews } from '@/components/dashboard/guest-reviews';
import { DashboardLayout } from '@/layout';
import { useDropdownStore, useReviewsStore } from '@/stores';
import { useCallback, useEffect } from 'react';

const ID = '10083468'; // will be changed how to get this id by using the dropdown

export function PageGuestReviews() {
	const { setData, setLoading } = useReviewsStore();
	const { vendor } = useDropdownStore();

	const fetchReviews = useCallback(
		(page = 1) => {
			setLoading(true);
			APIGuestReviews.getReviews(ID, vendor, { page })
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					console.error(error);
					setData([]);
				})
				.finally(() => setLoading(false));
		},
		[setData, setLoading, vendor]
	);

	const handleNextPage = (page) => {
		fetchReviews(page + 1);
	};

	const handlePrevPage = (page) => {
		fetchReviews(page - 1);
	};

	useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	return (
		<DashboardLayout
			title={'Guest Reviews'}
			gap={'2rem'}
		>
			<SectionReviews
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
			/>
		</DashboardLayout>
	);
}
