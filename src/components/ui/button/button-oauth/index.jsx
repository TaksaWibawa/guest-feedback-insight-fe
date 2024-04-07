import { Button, Flex, Text } from '@chakra-ui/react';

export function ButtonOauth({ providerName, providerIcon, onClick }) {
	return (
		<Button
			type="button"
			onClick={onClick}
			bgColor={'white'}
			color={'black'}
			_hover={{
				bgColor: 'gray.100',
			}}
			_active={{
				bgColor: 'gray.200',
			}}
			_focus={{
				outline: 'none',
			}}
		>
			<Flex
				alignItems="center"
				justifyContent="center"
				gap={2}
			>
				{providerIcon}
				<Text> Sign In with {providerName} </Text>
			</Flex>
		</Button>
	);
}
