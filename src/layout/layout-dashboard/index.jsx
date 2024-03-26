import { SectionHead } from '@/components/dashboard/base';
import { Flex, Grid } from '@chakra-ui/react';

export function LayoutDashboard({ title, children, ...props }) {
	return (
		<Grid padding={'1.5rem 2rem'}>
			<SectionHead title={title} />
			<Flex
				flexDirection={'column'}
				{...props}
			>
				{children}
			</Flex>
		</Grid>
	);
}
