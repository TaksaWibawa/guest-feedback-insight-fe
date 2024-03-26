import { ButtonOutline } from '@/components/ui/button';
import { formatDate } from '@/utils';
import { Pagination } from '@/components/ui/pagination';
import { SkeletonTableRow } from '@/components/ui/skeleton';
import { TableBase, TableCell } from '@/components/ui/table';
import { Tr } from '@chakra-ui/react';
import { useDropdownStore, useReviewDetailStore, useReviewsStore } from '@/stores';
import { APIGuestReviews } from '@/apis';

const TABLE_COLUMNS = ['Reviewer Name', 'Date', 'Category', 'Comment', 'Actions'];

export function SectionReviews({ onNextPage, onPrevPage }) {
	const { data, loading } = useReviewsStore();
	const { vendor } = useDropdownStore();
	const { setData, setLoading } = useReviewDetailStore();

	const ID = '10083468'; // will be changed how to get this id by using the dropdown

	const fetchReviewDetails = (reviewerId) => {
		APIGuestReviews.getReviewDetails(ID, vendor, reviewerId)
			.then((response) => {
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
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
				{loading && (
					<SkeletonTableRow
						cell={5}
						row={10}
						height={'2.5rem'}
					/>
				)}

				{!loading && Object.keys(data).length === 0 && (
					<Tr>
						<TableCell colSpan={5}>Data not found</TableCell>
					</Tr>
				)}

				{!loading &&
					data &&
					data.reviews &&
					data.reviews.length > 0 &&
					data.reviews.map((review, index) => (
						<Tr
							key={review.reviewer_id}
							bgColor={index % 2 === 0 ? 'gray.50' : 'white'}
							_hover={{
								bgColor: 'gray.100',
							}}
						>
							<TableCell w={'15%'}>{review.reviewer_name}</TableCell>
							<TableCell w={'20%'}>{formatDate(review.date)}</TableCell>
							<TableCell w={'15%'}>Category</TableCell>
							<TableCell
								w={'35%'}
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

			{data && data.pagination && (
				<Pagination
					totalPage={data?.pagination?.totalPage}
					page={data?.pagination?.page}
					onNextPage={onNextPage}
					onPrevPage={onPrevPage}
					isLoading={loading}
				/>
			)}
		</>
	);
}
