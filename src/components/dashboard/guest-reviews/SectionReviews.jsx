import { APIGuestReviews } from '@/apis';
import {
  ButtonOutline,
  DropdownCustom,
  LoadingOverlay,
  ModalDetailReview,
  Pagination,
  SkeletonTableRow,
  TableBase,
  TableCell,
} from '@/components/ui';
import { capitalizeSentence } from '@/utils';
import { Flex, Tr, useDisclosure } from '@chakra-ui/react';
import { useDropdownStore, useReviewDetailStore, useReviewsStore } from '@/stores';

const TABLE_COLUMNS = ['No', 'Review', 'Action'];

const VENDOR_OPTIONS = [
  {
    name: 'booking.com',
  },
  {
    name: 'airbnb',
  },
  {
    name: 'tripadvisor',
  },
  {
    name: 'agoda',
  },
];

export function SectionReviews({ onNextPage, onPrevPage }) {
  const { data: reviewsData, loading: reviewsLoading } = useReviewsStore();
  const {
    setData: setDetailData,
    loading: detailLoading,
    setLoading: setDetailLoading,
  } = useReviewDetailStore();
  const { setVendor } = useDropdownStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleVendorChange = (value) => {
    setVendor(value);
  };

  const fetchReviewDetails = (reviewerId) => {
    setDetailLoading(true);
    APIGuestReviews.getReviewDetails(reviewerId)
      .then((response) => {
        setDetailLoading(false);
        setDetailData(response.data);
        onOpen();
      })
      .catch((error) => {
        console.error(error);
        setDetailLoading(false);
        setDetailData({});
      });
  };

  const startIndex = (reviewsData?.pagination?.page - 1) * reviewsData?.pagination?.limit + 1;

  return (
    <>
      <Flex
        gap={'0.5rem'}
        alignItems={'center'}
        justifyContent={'flex-end'}
      >
        <DropdownCustom
          width={'25rem'}
          options={VENDOR_OPTIONS}
          defaultValue={VENDOR_OPTIONS[0]}
          onChange={handleVendorChange}
          isLoading={reviewsLoading}
        />
      </Flex>
      <TableBase
        heads={TABLE_COLUMNS}
        variant={'simple'}
        propsTable={{
          textAlign: 'center',
        }}
        propsBase={{
          textAlign: 'center',
        }}
      >
        {reviewsLoading && (
          <SkeletonTableRow
            cell={5}
            row={10}
            height={'2.5rem'}
          />
        )}

        {!reviewsLoading && Object.keys(reviewsData).length === 0 && (
          <Tr>
            <TableCell colSpan={5}>Data not found</TableCell>
          </Tr>
        )}
        {!reviewsLoading &&
          reviewsData &&
          reviewsData.reviews &&
          reviewsData.reviews.length > 0 &&
          reviewsData.reviews.map((review, index) => (
            <Tr
              key={review.review_id}
              bgColor={index % 2 === 0 ? 'gray.50' : 'white'}
              _hover={{
                bgColor: 'gray.100',
              }}
            >
              <TableCell w={'5%'}>{startIndex + index}</TableCell>
              <TableCell
                w={'80%'}
                textTransform={'none'}
                textAlign={'left'}
              >
                {capitalizeSentence(review.review)}
              </TableCell>
              <TableCell
                w={'15%'}
                textOverflow={'none'}
              >
                <ButtonOutline
                  text={'Details'}
                  isActive={true}
                  onClick={() => fetchReviewDetails(review.review_id)}
                  _hover={{
                    bgColor: 'brand.600',
                  }}
                />
              </TableCell>
            </Tr>
          ))}
      </TableBase>

      {reviewsData && reviewsData.pagination && (
        <Pagination
          totalPage={reviewsData?.pagination?.total_page}
          page={reviewsData?.pagination?.page}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          isLoading={reviewsLoading}
        />
      )}
      <LoadingOverlay isLoading={detailLoading} />
      {!detailLoading && (
        <ModalDetailReview
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
