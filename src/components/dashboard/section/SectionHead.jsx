import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { Dropdown } from "@/components/ui/dropdown";
import { usePathnameToArray } from "@/hooks";
import { Flex, Heading } from "@chakra-ui/react";

export function SectionHead({ title, dateOptions, vendorOptions }) {
	const pathname = usePathnameToArray();
	return (
		<Flex
			flexDirection={"column"}
			gap={"1rem"}
		>
			<CustomBreadcrumb path={pathname} />
			<Flex
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Heading>{title || "No Title"}</Heading>
				<Flex gap={"0.5rem"}>
					<Dropdown
						options={vendorOptions || ["Booking.com", "Tripadvisor", "Agoda"]}
						defaultValue={"Booking.com"}
					/>
					<Dropdown
						options={dateOptions || ["Week", "Month", "Year"]}
						defaultValue={"Month"}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
