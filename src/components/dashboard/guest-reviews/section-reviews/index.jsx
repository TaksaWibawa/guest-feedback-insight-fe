import { ButtonOutline } from '@/components/ui/button';
import { formatDate } from '@/utils';
import { Pagination } from '@/components/ui/pagination';
import { SkeletonTableRow } from '@/components/ui/skeleton';
import { TableBase, TableCell } from '@/components/ui/table';
import { Flex, Tr, useDisclosure } from '@chakra-ui/react';
import { useDropdownStore, useReviewDetailStore, useReviewsStore } from '@/stores';
import { APIGuestReviews } from '@/apis';
import { LoadingOverlay } from '@/components/ui/loading';
import { ModalDetailReview } from '@/components/ui/modal';
import { DropdownCustom } from '@/components/ui/dropdown';

const TABLE_COLUMNS = ['Date', 'Category', 'Comment', 'Actions'];

const VENDOR_OPTIONS = [
	{
		label: 'Airbnb',
		value: 'airbnb',
	},
	{
		label: 'Booking.com',
		value: 'booking.com',
	},
	{
		label: 'Tripadvisor',
		value: 'tripadvisor',
	},
	{
		label: 'Agoda',
		value: 'agoda',
	},
];

export function SectionReviews({ onNextPage, onPrevPage }) {
	const { data: reviewsData, loading: reviewsLoading } = useReviewsStore();
	const { setData: setDetailData, loading: detailLoading, setLoading: setDetailLoading } = useReviewDetailStore();
	const { vendor, setVendor } = useDropdownStore();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const ID = '10083468'; // will be changed how to get this id by using the dropdown

	const handleVendorChange = (value) => {
		setVendor(value);
	};

	const fetchReviewDetails = (reviewerId) => {
		setDetailLoading(true);
		APIGuestReviews.getReviewDetails(ID, vendor, reviewerId)
			.then((response) => {
				setDetailLoading(false);
				setDetailData(response.data);
				onOpen();
			})
			.catch((error) => {
				console.error(error);
				setDetailLoading(false);
			});
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
					defaultValue={VENDOR_OPTIONS[0].value}
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
							key={review.reviewer_id}
							bgColor={index % 2 === 0 ? 'gray.50' : 'white'}
							_hover={{
								bgColor: 'gray.100',
							}}
						>
							{/* <TableCell w={'15%'}>{review.reviewer_name}</TableCell> */}
							<TableCell w={'15%'}>{formatDate(review.date)}</TableCell>
							<TableCell w={'10%'}>Category</TableCell>
							<TableCell
								w={'60%'}
								textTransform={'none'}
							>
								{review.comments}
							</TableCell>
							<TableCell
								w={'15%'}
								textOverflow={'none'}
							>
								<ButtonOutline
									text={'Details'}
									isActive={true}
									onClick={() => fetchReviewDetails(review._id)}
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
					totalPage={reviewsData?.pagination?.totalPage}
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
