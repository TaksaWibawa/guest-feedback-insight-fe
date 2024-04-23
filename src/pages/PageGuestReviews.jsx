import { APIGuestReviews } from '@/apis';
import { DashboardLayout } from '@/layout';
import { useCallback, useEffect } from 'react';
import { useDropdownStore, useReviewsStore } from '@/stores';
import { SectionReviews } from '@/components/dashboard/guest-reviews';

export function PageGuestReviews() {
  const { setData, setLoading, resetReviewsStore } = useReviewsStore();
  const { vendor } = useDropdownStore();

  const fetchReviews = useCallback(
    (page = 1) => {
      setLoading(true);
      APIGuestReviews.getReviews({ vendor, page })
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {
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

    return () => {
      resetReviewsStore();
    };
  }, [fetchReviews, resetReviewsStore]);

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
