import { Select } from '@chakra-ui/react';

export function DropdownCustom({ width, options, defaultValue, onChange, isLoading, ...props }) {
	return (
		<Select
			size={'sm'}
			maxW={'10rem'}
			w={width}
			defaultValue={defaultValue}
			onChange={(event) => {
				onChange(event.target.value);
			}}
			isDisabled={isLoading}
			{...props}
		>
			{options?.map((option) => {
				return (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				);
			})}
		</Select>
	);
}
