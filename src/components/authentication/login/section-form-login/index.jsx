import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { InputCustom } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

import GuestProIllustration from '@/assets/guestpro-full.png';

export function SectionFormLogin({ formHandler }) {
	const navigate = useNavigate();

	return (
		<Flex
			h={'100vh'}
			direction="column"
			justifyContent="center"
			gap={4}
		>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				mb={4}
				mx={'auto'}
				w={{ base: '60%', md: '50%', lg: '80%' }}
			>
				<Image
					src={GuestProIllustration}
					alt="GuestPro"
					objectFit={'contain'}
				/>
			</Box>
			<form onSubmit={formHandler.handleSubmit}>
				<Flex
					direction="column"
					gap={4}
				>
					<InputCustom
						label="Email"
						name="email"
						type="text"
						value={formHandler.values.email}
						onChange={formHandler.handleChange}
						error={formHandler.errors.email}
					/>
					<InputCustom
						label="Password"
						name="password"
						type="password"
						value={formHandler.values.password}
						onChange={formHandler.handleChange}
						error={formHandler.errors.password}
					/>
					<Button
						type="submit"
						bgColor={'brand.500'}
						color={'white'}
						_hover={{
							bgColor: 'brand.600',
						}}
					>
						Login
					</Button>
				</Flex>
			</form>

			<Text
				fontSize={{
					base: 'xs',
					md: 'sm',
				}}
				textAlign={'center'}
			>
				Don&apos;t have an account?{' '}
				<Text
					as="span"
					color="brand.500"
					cursor="pointer"
					_hover={{
						textDecoration: 'underline',
						color: 'brand.600',
					}}
					onClick={() => navigate('/register')}
				>
					Register
				</Text>
			</Text>
		</Flex>
	);
}
