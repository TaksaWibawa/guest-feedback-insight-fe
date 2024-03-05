import { Select } from "@chakra-ui/react";

export function Dropdown({ options, defaultValue, ...props }) {
	return (
		<Select
			placeholder="Select option"
			size={"sm"}
			maxW={"9rem"}
			defaultValue={defaultValue}
			{...props}
		>
			{options?.map((value, index) => {
				return (
					<option
						key={index}
						value={value}
					>
						{value}
					</option>
				);
			})}
		</Select>
	);
}
