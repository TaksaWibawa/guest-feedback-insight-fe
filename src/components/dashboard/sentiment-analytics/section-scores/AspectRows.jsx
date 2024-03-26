import { ChartSentimentColor } from '@/components/ui/chart';
import { Flex, Td, Tr } from '@chakra-ui/react';

export function AspectRows({ aspects, index }) {
	return aspects?.map((aspect, subIndex) => (
		<Tr
			key={`${index}-${subIndex}`}
			bgColor={'#ECECEC'}
			fontSize={'0.875rem'}
			textTransform={'capitalize'}
			_hover={{
				bgColor: '#DEDEDE',
			}}
			borderBottom={subIndex === aspects.length - 1 ? 'none' : '2px solid #DEDEDE'}
		>
			<Td paddingLeft={'2.5rem'}>{aspect.category}</Td>
			<Td>{aspect.sentimentScore}</Td>
			<Td>{aspect.trend}</Td>
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
							currentCount={aspect.positive}
							totalCount={aspect.mentions}
						/>
						<ChartSentimentColor
							label={'Neutral'}
							bgColor={'lightGray'}
							currentCount={aspect.neutral}
							totalCount={aspect.mentions}
						/>
						<ChartSentimentColor
							label={'Negative'}
							bgColor={'#ff0505'}
							currentCount={aspect.negative}
							totalCount={aspect.mentions}
						/>
					</Flex>
					{aspect.mentions}
				</Flex>
			</Td>
			<Td>{aspect.positive}</Td>
			<Td>{aspect.negative}</Td>
			<Td>{aspect.neutral}</Td>
		</Tr>
	));
}
