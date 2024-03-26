import { AspectRatio, Card, Flex, Image, Text } from '@chakra-ui/react';
import { BiExpandVertical } from 'react-icons/bi';

export function Profile({ isCollapsed }) {
	return (
		<Flex
			flexDirection={'column'}
			w={'full'}
		>
			<Flex
				as={Card}
				minW={isCollapsed ? '4rem' : '12rem'}
				borderRadius={'lg'}
				color={'black'}
				py={'0.5rem'}
				justifyContent={'space-around'}
				alignItems={'center'}
				direction={'row'}
				boxShadow={'xl'}
			>
				<AspectRatio
					boxSize={'2.5rem'}
					ratio={1}
				>
					<Image
						src="https://bit.ly/sage-adebayo"
						borderRadius={'lg'}
						objectFit={'contain'}
					/>
				</AspectRatio>
				{!isCollapsed && (
					<>
						<Flex
							flexDirection={'column'}
							justifyContent={'center'}
						>
							<Text fontSize={'0.9rem'}>Username</Text>
							<Text fontSize={'0.9rem'}>Role</Text>
						</Flex>
					</>
				)}
				<BiExpandVertical color="gray" />
			</Flex>
		</Flex>
	);
}
