import { SectionHead } from '@/components/dashboard/base';
import { NavigationMobile } from '@/components/ui/navigation';
import { Container, Flex, Grid, useMediaQuery } from '@chakra-ui/react';

export function LayoutDashboard({ title, children, ...props }) {
	const [isLargerThanLaptopXL] = useMediaQuery('(min-width: 80em)');

	return (
		<Container
			maxW={'100vw'}
			padding={0}
		>
			<Grid
				padding={{
					base: '0rem',
					xl: '3rem',
				}}
			>
				{!isLargerThanLaptopXL && <NavigationMobile />}

				<Flex
					padding={{
						base: '1rem',
						xl: '0rem',
					}}
					flexDirection={'column'}
					{...props}
				>
					<SectionHead title={title} />
					{children}
				</Flex>
			</Grid>
		</Container>
	);
}
