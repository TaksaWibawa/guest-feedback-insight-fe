import { Flex, Grid } from "@chakra-ui/react";
import { SectionHead } from "../components/dashboard/section";

export function DashboardLayout({ title, children, ...props }) {
	return (
		<Grid padding={"1.5rem 2rem"}>
			<SectionHead title={title} />
			<Flex
				flexDirection={"column"}
				{...props}
			>
				{children}
			</Flex>
		</Grid>
	);
}
