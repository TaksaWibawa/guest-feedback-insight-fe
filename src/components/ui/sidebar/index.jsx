import { Box, Divider, Flex, Image, Spacer } from '@chakra-ui/react';
import { ButtonIconOutline, ButtonOutline } from '../button';
import { MdInsertChart, MdPeople } from 'react-icons/md';
import { Profile } from './Profile';
import { useNavigate } from 'react-router-dom';

import LogoFull from '@/assets/guestpro-full.png';
import LogoIcon from '@/assets/guestpro-icon.png';
import { useSidebarStore } from '@/stores';

const SIDEBAR_DATA = [
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

export function Sidebar() {
	const navigate = useNavigate();
	const { isCollapsed, setIsCollapsed } = useSidebarStore();

	const checkActive = (href) => {
		return window.location.pathname === href;
	};

	const handleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<Flex
			position={'sticky'}
			left={0}
			top={0}
			h={'100vh'}
			w={isCollapsed ? '6rem' : '16rem'}
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
					maxW={isCollapsed ? '2.5rem' : '15rem'}
					height={'auto'}
					onClick={handleCollapse}
					_hover={{ cursor: 'pointer' }}
				>
					<Image
						src={isCollapsed ? LogoIcon : LogoFull}
						alt="GuestPro"
						objectFit="contain"
					/>
				</Box>
			</Flex>
			<Divider borderColor={'blackAlpha.500'} />
			<Flex
				flexDirection={'column'}
				alignItems={isCollapsed ? 'center' : ''}
				w={'full'}
				gap={'1rem'}
			>
				{SIDEBAR_DATA.map((item, index) =>
					isCollapsed ? (
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
			<Profile isCollapsed={isCollapsed} />
		</Flex>
	);
}
