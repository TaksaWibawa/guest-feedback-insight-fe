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
import { useApiCall } from '@/hooks';

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

export function SectionReviews({ onNextPage, onPrevPage, isLoading }) {
  const { reviews } = useReviewsStore();
  const { setReviewDetail } = useReviewDetailStore();
  const { setVendor } = useDropdownStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const startIndex = (reviews?.pagination?.page - 1) * reviews?.pagination?.limit + 1;

  const [fetchReviewDetails, fetchReviewDetailsLoading] = useApiCall(
    APIGuestReviews.getReviewDetails
  );

  const handleOpen = async (reviewId) => {
    onOpen();
    try {
      const response = await fetchReviewDetails({ reviewId }, false);
      setReviewDetail(response);
    } catch (error) {
      setReviewDetail({});
      throw new Error(error);
    }
  };

  const handleVendorChange = (value) => {
    setVendor(value);
  };

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
          isLoading={isLoading}
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
        {isLoading && (
          <SkeletonTableRow
            cell={5}
            row={10}
            height={'2.5rem'}
          />
        )}

        {!isLoading && Object.keys(reviews).length === 0 && (
          <Tr>
            <TableCell colSpan={5}>Data not found</TableCell>
          </Tr>
        )}
        {!isLoading &&
          reviews?.reviews &&
          reviews?.reviews?.map((review, index) => (
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
                  onClick={() => handleOpen(review.review_id)}
                  _hover={{
                    bgColor: 'brand.600',
                  }}
                />
              </TableCell>
            </Tr>
          ))}
      </TableBase>

      {reviews && reviews.pagination && (
        <Pagination
          totalPage={reviews?.pagination?.total_page}
          page={reviews?.pagination?.page}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          isLoading={isLoading}
        />
      )}
      {fetchReviewDetailsLoading && <LoadingOverlay isLoading={fetchReviewDetailsLoading} />}
      {!fetchReviewDetailsLoading && (
        <ModalDetailReview
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
