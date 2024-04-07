import { Menu, MenuItem } from '@chakra-ui/react';

export function MenuBase({ options }) {
	<Menu>
		{options.map((option, index) => (
			<MenuItem key={index}>{option}</MenuItem>
		))}
	</Menu>;
}
