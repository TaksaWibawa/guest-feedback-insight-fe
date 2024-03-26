import React from 'react';

import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { TableBase } from '@/components/ui/table';
import { Flex, Td, Tr } from '@chakra-ui/react';
import { useAspectsStore, useCategoriesStore } from '@/stores';
import { setScoreColor } from '@/utils';
import { ChartSentimentColor } from '@/components/ui/chart';
import { AspectRows } from './AspectRows';
import { SkeletonTableRow } from '@/components/ui/skeleton';

const TABLE_COLUMNS = ['category', 'sentiment score', 'trends', 'mentions', 'positive', 'negative', 'neutral'];

export function SectionScores() {
	const { showAspects, categories, loading, handleToggle } = useCategoriesStore();
	const { aspects, setAspects } = useAspectsStore();

	React.useEffect(() => {
		showAspects.forEach((show, index) => {
			show && setAspects(categories[index].category);
		});
	}, [showAspects, categories, setAspects]);

	const calculateSentimentColor = (indicator, target) => {
		return indicator ? setScoreColor(target) : setScoreColor(target, '#ff0505', '#4bfa00');
	};

	return (
		<TableBase
			heads={TABLE_COLUMNS}
			variant={'simple'}
		>
			{!loading ? (
				categories?.map((category, index) => (
					<React.Fragment key={`${category}-${index}`}>
						<Tr
							bgColor={showAspects[index] ? 'brand.500' : 'white'}
							color={showAspects[index] && 'white'}
							fontSize={'0.875rem'}
							fontWeight={'semibold'}
							textTransform={'capitalize'}
							_hover={{
								bgColor: 'brand.500',
								color: 'white',
								'.score-hover-color': {
									color: setScoreColor(category.sentimentScore, '#ff0505', '#4bfa00'),
								},
							}}
						>
							<Td
								whiteSpace={'nowrap'}
								cursor="pointer"
								onClick={() => handleToggle(index)}
							>
								<Flex
									gap={'0.25rem'}
									alignItems={'center'}
								>
									{showAspects[index] ? <BiChevronDown /> : <BiChevronRight />}
									{category.category}
								</Flex>
							</Td>
							<Td
								className="score-hover-color"
								color={calculateSentimentColor(!showAspects[index], category.sentimentScore)}
							>
								{category.sentimentScore}
							</Td>
							<Td>{category.trend}</Td>
							<Td>
								<Flex
									justifyContent={'space-between'}
									alignItems={'center'}
								>
									<Flex
										width={'60%'}
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
						{showAspects[index] && (
							<AspectRows
								aspects={aspects[category.category]}
								index={index}
							/>
						)}
					</React.Fragment>
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
