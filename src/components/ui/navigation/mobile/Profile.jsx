import { APIAuth } from '@/apis';
import { AspectRatio, Flex, Image, Text, useDisclosure, Menu, MenuButton, MenuItem, MenuList, MenuDivider } from '@chakra-ui/react';
import { BiExpandVertical } from 'react-icons/bi';
import { Fragment } from 'react';
import { MdLogout, MdPeople, MdSettings } from 'react-icons/md';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';

const MENU_ITEMS = [
	{
		name: 'Profile',
		icon: <MdPeople />,
		href: '/profile',
	},
	{
		name: 'Settings',
		icon: <MdSettings />,
		href: '/settings',
	},
	{
		name: 'Logout',
		icon: <MdLogout />,
	},
];

export function Profile() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user, logout } = useAuthStore();
	const navigate = useNavigate();

	const handleClick = async (menu) => {
		if (menu === 'Logout') {
			await APIAuth.logout().then(() => {
				navigate('/');
				logout();
			});
		} else {
			navigate(MENU_ITEMS.find((item) => item.name === menu)?.href);
		}
	};

	return (
		<Menu
			isOpen={isOpen}
			onClose={onClose}
			placement={'auto'}
			matchWidth
		>
			<MenuButton
				as={Flex}
				minW={'full'}
				borderRadius={'lg'}
				color={'black'}
				p={'0.5rem'}
				justifyContent={'space-between'}
				alignItems={'center'}
				direction={'row'}
				boxShadow={'xl'}
				gap={'1rem'}
				onClick={onOpen}
				cursor={'pointer'}
				_hover={{ bgColor: 'gray.100' }}
			>
				<Flex
					flexDirection={'row'}
					alignItems={'center'}
					justifyContent={'space-around'}
					gap={'0.25rem'}
				>
					<Flex
						gap={'1rem'}
						maxW={'70%'}
					>
						<AspectRatio
							boxSize={'2.5rem'}
							ratio={1}
						>
							<Image
								src={user?.photoURL || 'https://bit.ly/sage-adebayo'}
								borderRadius={'lg'}
								objectFit={'contain'}
							/>
						</AspectRatio>
						<Flex
							flexDirection={'column'}
							justifyContent={'center'}
							maxW={'70%'}
						>
							<Text
								fontSize={'0.9rem'}
								fontWeight={'bold'}
								isTruncated
							>
								{user?.displayName || 'Username'}
							</Text>
							<Text
								fontSize={'0.9rem'}
								isTruncated
							>
								Company
							</Text>
						</Flex>
					</Flex>
					<BiExpandVertical color="gray" />
				</Flex>
			</MenuButton>
			<MenuList
				boxShadow={'xl'}
				borderRadius={'lg'}
			>
				{MENU_ITEMS.map((item, index) => (
					<Fragment key={item.name}>
						<MenuItem
							icon={item.icon}
							onClick={() => handleClick(item.name)}
							padding={'0.5rem 1rem'}
							_hover={{
								color: item.name === 'Logout' ? 'red.500' : 'brand.500',
								backgroundColor: 'gray.100',
							}}
						>
							{item.name}
						</MenuItem>
						{index === MENU_ITEMS.length - 2 && <MenuDivider />}
					</Fragment>
				))}
			</MenuList>
		</Menu>
	);
}
