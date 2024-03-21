import { Tr } from '@chakra-ui/react';

export function TableRows({ color, children, ...props }) {
	return (
		<Tr
			bgColor={getColor(color)}
			_hover={{
				bgColor: '#DEDEDE',
			}}
			{...props}
		>
			{children}
		</Tr>
	);
}

function getColor(color) {
	switch (color) {
		case 'lightGreen':
			return '#E7EE99';
		case 'mainGreen':
			return '#BEDC4D';
		case 'darkGreen':
			return '#8DB600';
		case 'lightGray':
			return '#FAFAFA';
		case 'mainGray':
			return '#ECECEC';
		case 'darkGray':
			return '#D4D4D4';
		default:
			return '#FAFAFA';
	}
}
