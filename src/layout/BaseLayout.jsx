import { Sidebar } from "@/components/ui/sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

export function BaseLayout({ children }) {
	return (
		<Grid
			templateColumns={"0.2fr 1fr"}
			maxW={"100vw"}
			padding={0}
		>
			<GridItem>
				<Sidebar />
			</GridItem>
			<GridItem>{children}</GridItem>
		</Grid>
	);
}
