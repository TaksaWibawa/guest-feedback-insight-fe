import { Box, Button, Flex, Heading, ModalBody, ModalFooter, ModalHeader, Text } from '@chakra-ui/react';
import { ChartWordCloud } from '../../chart';
import { formatDate } from '@/utils';
import { ModalBase } from '../modal-base';
import { useReviewDetailStore } from '@/stores';
import React from 'react';

const colors = ['#FF0080', '#FF00FF', '#800080'];

const words =
	'lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum';

const sentimentInsightsWordsCollection = [
	{
		text: 'dirty',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'clean',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'smelly',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'comfortable',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'noisy',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'quiet',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'old',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'new',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'small',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'big',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'uncomfortable',
		value: Math.floor(Math.random() * 100),
		sentiment: 'negative',
	},
	{
		text: 'spacious',
		value: Math.floor(Math.random() * 100),
		sentiment: 'positive',
	},
	{
		text: 'normal',
		value: Math.floor(Math.random() * 100),
		sentiment: 'neutral',
	},
];

export function ModalDetailReview({ isOpen, onClose }) {
	const { data } = useReviewDetailStore();

	const setSentimentColor = (sentiment) => {
		if (sentiment === 'positive') return 'green.500';
		if (sentiment === 'negative') return 'red.500';
		return 'gray.500';
	};

	return (
		<ModalBase
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalHeader
				display={'flex'}
				flexDirection={'column'}
				gap={1}
			>
				<Heading
					as={'h2'}
					size={'lg'}
				>
					Detail Review
				</Heading>
				<Text
					fontSize={'lg'}
					fontWeight={'normal'}
				>
					{formatDate(data?.date)} | {data?.category || 'Category'}
				</Text>
			</ModalHeader>
			<ModalBody>
				<Text
					fontSize={'md'}
					fontWeight={'semibold'}
					fontStyle={'italic'}
					textAlign={'justify'}
				>
					{data?.comments}
				</Text>
				<ChartWordCloud
					parentWidth={'100%'}
					parentHeight={'300px'}
					words={words}
					colors={colors}
				/>
				<Flex
					flexDirection={'column'}
					justifyContent={'flex-start'}
					gap={2}
				>
					<Text
						fontSize={'2xl'}
						fontWeight={'semibold'}
					>
						Sentiment Insight
					</Text>
					<Box as={'span'}>
						{sentimentInsightsWordsCollection.map((word, index) => (
							<React.Fragment key={index}>
								<Text
									as="span"
									fontWeight={'semibold'}
									textTransform={'capitalize'}
									color={setSentimentColor(word.sentiment)}
									verticalAlign={'middle'}
								>
									{word.text}{' '}
									<Text
										as={'span'}
										fontSize={'xs'}
									>
										({word.value})
									</Text>{' '}
								</Text>
								{index < sentimentInsightsWordsCollection.length - 1 && (
									<Text
										as="span"
										fontSize={'xs'}
									>
										{' '}
										•{' '}
									</Text>
								)}
							</React.Fragment>
						))}
					</Box>
				</Flex>
			</ModalBody>
			<ModalFooter mt={2}>
				<Button
					onClick={onClose}
					colorScheme="brand"
					variant="outline"
					_hover={{
						bgColor: 'brand.500',
						color: 'white',
					}}
				>
					Close
				</Button>
			</ModalFooter>
		</ModalBase>
	);
}
