import { APIAuth } from '@/apis';
import {
  AspectRatio,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiExpandVertical } from 'react-icons/bi';
import { Fragment } from 'react';
import { MdLogout } from 'react-icons/md';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';

const MENU_ITEMS = [
  {
    name: 'Logout',
    icon: <MdLogout />,
  },
];

export function Profile({ isCollapsed, setIsCollapsed }) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = async (menu) => {
    if (menu === 'Logout') {
      await APIAuth.logout().then(() => {
        navigate('/');
        logout();
      });
    } else {
      navigate(menu);
    }
  };

  const toggleMenu = () => {
    onOpen();
    if (isCollapsed) setIsCollapsed();
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
        minW={isCollapsed ? '4rem' : 'full'}
        borderRadius={'lg'}
        color={'black'}
        p={'0.5rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
        boxShadow={'xl'}
        gap={'0.5rem'}
        onClick={toggleMenu}
        cursor={'pointer'}
        _hover={{ bgColor: 'gray.100' }}
      >
        <Flex
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
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
            {!isCollapsed && (
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
            )}
          </Flex>
          {!isCollapsed && <BiExpandVertical color="gray" />}
        </Flex>
      </MenuButton>
      <MenuList
        boxShadow={'xl'}
        borderRadius={'lg'}
      >
        {MENU_ITEMS.map((item, index) => (
          <Fragment key={item.name}>
            <MenuItem
              key={index}
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
