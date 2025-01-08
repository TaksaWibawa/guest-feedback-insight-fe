/* eslint-disable react-hooks/exhaustive-deps */
import { APIGuestReviews } from '@/apis';
import { DashboardLayout } from '@/layout';
import { useEffect } from 'react';
import { useDropdownStore, useReviewsStore } from '@/stores';
import { SectionReviews } from '@/components/dashboard/guest-reviews';
import { useApiCall } from '@/hooks';
import { useSearchParams } from 'react-router-dom';

export function PageGuestReviews() {
  const { setReviews, resetReviewsStore } = useReviewsStore();
  const { vendor } = useDropdownStore();

  const [searchParams] = useSearchParams();
  let queries = {};

  searchParams.forEach((value, key) => {
    queries[key] = value;
  });

  const [fetchReviews, loadingReviews] = useApiCall(APIGuestReviews.getReviews);

  const handleNextPage = async (page) => {
    const response = await fetchReviews({
      ...queries,
      vendor,
      page: page + 1,
    });
    setReviews(response);
  };

  const handlePrevPage = async (page) => {
    const response = await fetchReviews({
      ...queries,
      vendor,
      page: page - 1,
    });
    setReviews(response);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchReviews({ ...queries, vendor });
        setReviews(response);
      } catch (error) {
        setReviews([]);
        throw new Error(error);
      }
    })();

    return () => {
      resetReviewsStore();
    };
  }, [setReviews, resetReviewsStore, vendor]);

  return (
    <DashboardLayout
      title={'Guest Reviews'}
      gap={'2rem'}
    >
      <SectionReviews
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        isLoading={loadingReviews}
      />
    </DashboardLayout>
  );
}
