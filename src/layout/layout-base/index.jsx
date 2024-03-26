import { Sidebar } from '@/components/ui/sidebar';
import { Grid, GridItem } from '@chakra-ui/react';

export function LayoutBase({ children }) {
	return (
		<Grid
			templateColumns={'0fr 1fr'}
			maxW={'100vw'}
			padding={0}
		>
			<GridItem>
				<Sidebar />
			</GridItem>
			<GridItem>{children}</GridItem>
		</Grid>
	);
}
