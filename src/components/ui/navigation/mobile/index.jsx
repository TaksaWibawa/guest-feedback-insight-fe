import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Flex, Image, Spacer, IconButton } from '@chakra-ui/react';
import { ButtonOutline } from '../../button';
import { MdApps, MdInsertChart, MdPeople } from 'react-icons/md';
import { Profile } from './Profile';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import LogoFull from '@/assets/guestpro-full.png';

const MENU_ITEMS = [
	{
		name: 'Sentiment Analytics',
		icon: <MdInsertChart size={24} />,
		href: '/sentiment-analytics',
	},
	{
		name: 'Guest Reviews',
		icon: <MdPeople size={24} />,
		href: '/guest-reviews',
	},
];

export function NavigationMobile() {
	const { isOpen, onToggle } = useDisclosure();

	const btnRef = useRef();
	const location = useLocation().pathname;
	const navigate = useNavigate();

	const checkActive = (href) => {
		return location === href;
	};

	const handleCollapse = () => {
		onToggle();
	};

	return (
		<>
			<Flex
				as={'nav'}
				alignItems={'center'}
				flexDirection={'row'}
				mb={4}
				position={'sticky'}
				px={'1rem'}
				py={4}
				top={0}
				w={'full'}
				zIndex={1}
				backgroundColor={'white'}
				borderBottom={'1px solid #E2E8F0'}
				boxShadow={'md'}
			>
				<IconButton
					ref={btnRef}
					onClick={handleCollapse}
					icon={<MdApps />}
					backgroundColor={'white'}
					color={'brand.600'}
					_hover={{
						backgroundColor: 'brand.600',
						color: 'white',
						border: 'none',
					}}
				/>
				<Box
					maxW={'10rem'}
					height={'auto'}
					position={'absolute'}
					left={'0'}
					right={'0'}
					margin={'auto'}
				>
					<Image
						src={LogoFull}
						alt="GuestPro"
						objectFit="contain"
					/>
				</Box>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement={'left'}
				onClose={handleCollapse}
				finalFocusRef={btnRef}
				size={'xs'}
			>
				<DrawerOverlay>
					<DrawerContent py={5}>
						<DrawerCloseButton
							top={10}
							right={4}
						/>
						<DrawerHeader>
							<Flex
								gap={'2rem'}
								alignItems={'center'}
								justifyContent={'space-between'}
							>
								<Box
									width={'75%'}
									height={'auto'}
								>
									<Image
										src={LogoFull}
										alt="GuestPro"
										objectFit="contain"
									/>
								</Box>
							</Flex>
						</DrawerHeader>
						<DrawerBody
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'space-between'}
							gap={'0.5rem'}
						>
							{MENU_ITEMS.map((item, index) => (
								<ButtonOutline
									key={index}
									text={item.name}
									leftIcon={item.icon}
									onClick={() => navigate(item.href)}
									isActive={checkActive(item.href)}
									paddingBlock={6}
								/>
							))}
							<Spacer />
							<Profile />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
}
