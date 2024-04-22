import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import UnauthorizedIllustration from '@/assets/unauthorized-illustration.svg';

export function PageUnauthorized() {
	const navigate = useNavigate();

	return (
		<Container
			maxW={'container.lg'}
			height={'100vh'}
			textAlign="center"
		>
			<Flex
				width={'100%'}
				height={'100%'}
				justifyContent={'center'}
				direction={'column'}
				alignItems={'center'}
			>
				<Box boxSize={'50%'}>
					<Image
						src={UnauthorizedIllustration}
						alt="Unauthorized Illustration"
					/>
				</Box>
				<Flex
					direction={'column'}
					alignItems={'center'}
					maxW={'lg'}
					gap={2}
				>
					<Heading
						as={'h1'}
						size={'xl'}
					>
						Unauthorized
					</Heading>
					<Text mb={2}>You are not authorized to access this page.</Text>
					<Button
						colorScheme={'brand'}
						onClick={() => navigate('/')}
					>
						Go To Login Page
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
}
