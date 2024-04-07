import { TableBase } from '@/components/ui/table';
import { Flex, Td, Tr } from '@chakra-ui/react';
import { useCategoriesStore } from '@/stores';
import { ChartSentimentColor } from '@/components/ui/chart';
import { SkeletonTableRow } from '@/components/ui/skeleton';

const TABLE_COLUMNS = ['category', 'mentions', 'positive', 'negative', 'neutral'];

export function SectionScores() {
	const { categories, loading } = useCategoriesStore();

	return (
		<TableBase
			heads={TABLE_COLUMNS}
			variant={'simple'}
		>
			{!loading ? (
				categories?.map((category, index) => (
					<Tr
						key={`${category}-${index}`}
						bgColor={'white'}
						fontSize={'0.875rem'}
						fontWeight={'semibold'}
						textTransform={'capitalize'}
						_hover={{
							bgColor: 'brand.500',
							color: 'white',
						}}
					>
						<Td whiteSpace={'nowrap'}>
							<Flex
								gap={'0.25rem'}
								alignItems={'center'}
							>
								{category.category}
							</Flex>
						</Td>
						<Td>
							<Flex
								justifyContent={'space-between'}
								alignItems={'center'}
							>
								<Flex
									width={'80%'}
									height={'0.75rem'}
								>
									<ChartSentimentColor
										label={'Positive'}
										bgColor={'#4bfa00'}
										currentCount={category.positive}
										totalCount={category.mentions}
									/>
									<ChartSentimentColor
										label={'Neutral'}
										bgColor={'lightGray'}
										currentCount={category.neutral}
										totalCount={category.mentions}
									/>
									<ChartSentimentColor
										label={'Negative'}
										bgColor={'#ff0505'}
										currentCount={category.negative}
										totalCount={category.mentions}
									/>
								</Flex>
								{category.mentions}
							</Flex>
						</Td>
						<Td>{category.positive}</Td>
						<Td>{category.negative}</Td>
						<Td>{category.neutral}</Td>
					</Tr>
				))
			) : (
				<SkeletonTableRow
					row={5}
					cell={7}
					width={'100%'}
					height={'1rem'}
				/>
			)}
		</TableBase>
	);
}
