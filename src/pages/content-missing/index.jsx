import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContentMissingIllustration from '../../assets/content-missing-illustration.svg';

export function PageContentMissing() {
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
						src={ContentMissingIllustration}
						alt="Content missing illustration"
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
						Page Not Found
					</Heading>
					<Text mb={2}>The page you are looking for does not exist. Please check the URL or click the button below to go back to previous page.</Text>
					<Button
						colorScheme={'brand'}
						onClick={() => navigate(-1)}
					>
						Go Back to Previous Page
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
}
