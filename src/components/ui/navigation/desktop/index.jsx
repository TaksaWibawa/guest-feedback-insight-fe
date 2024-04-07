import { Box, Divider, Flex, Image, Spacer, useDisclosure } from '@chakra-ui/react';
import { ButtonIconOutline, ButtonOutline } from '../../button';
import { MdInsertChart, MdPeople } from 'react-icons/md';
import { Profile } from './Profile';
import { useLocation, useNavigate } from 'react-router-dom';

import LogoFull from '@/assets/guestpro-full.png';
import LogoIcon from '@/assets/guestpro-icon.png';

export function NavigationDesktop() {
	const navigate = useNavigate();
	const location = useLocation().pathname;

	const { isOpen, onToggle } = useDisclosure();

	const checkActive = (href) => {
		return location === href;
	};

	const handleCollapse = () => {
		onToggle();
	};

	return (
		<Flex
			position={'sticky'}
			left={0}
			top={0}
			h={'100vh'}
			w={!isOpen ? '6rem' : '16rem'}
			p={'1.5rem 1rem'}
			flexDirection={'column'}
			alignItems={'center'}
			bgColor={'white'}
			gap={'1rem'}
			boxShadow={'xl'}
			sx={{
				overflowY: 'auto',
				overflowX: 'hidden',
				transition: 'width 0.3s ease',
			}}
		>
			<Flex
				gap={'2rem'}
				alignItems={'center'}
			>
				<Box
					maxW={!isOpen ? '2.5rem' : '15rem'}
					height={'auto'}
					onClick={handleCollapse}
					_hover={{ cursor: 'pointer' }}
				>
					<Image
						src={!isOpen ? LogoIcon : LogoFull}
						alt="GuestPro"
						objectFit="contain"
					/>
				</Box>
			</Flex>
			<Divider borderColor={'blackAlpha.500'} />
			<Flex
				flexDirection={'column'}
				alignItems={!isOpen ? 'center' : ''}
				w={'full'}
				gap={'1rem'}
			>
				{NAVIGATION_DESKTOP_DATA.map((item, index) =>
					!isOpen ? (
						<ButtonIconOutline
							key={index}
							icon={item.icon}
							onClick={() => navigate(item.href)}
							isActive={checkActive(item.href)}
						/>
					) : (
						<ButtonOutline
							key={index}
							text={item.name}
							leftIcon={item.icon}
							onClick={() => navigate(item.href)}
							isActive={checkActive(item.href)}
						/>
					)
				)}
			</Flex>
			<Spacer />
			<Profile
				isCollapsed={!isOpen}
				setIsCollapsed={handleCollapse}
			/>
		</Flex>
	);
}

const NAVIGATION_DESKTOP_DATA = [
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
