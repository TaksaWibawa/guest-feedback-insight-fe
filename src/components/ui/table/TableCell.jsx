import { Td } from '@chakra-ui/react';

export function TableCell({ children, textAlign, ...props }) {
	return (
		<Td
			maxW={props.maxW || '1rem'}
			overflow={props.overflow || 'hidden'}
			textOverflow={props.textOverflow || 'ellipsis'}
			whiteSpace={props.whiteSpace || 'nowrap'}
			textAlign={textAlign || 'center'}
			textTransform={props.textTransform || 'capitalize'}
			{...props}
		>
			{children}
		</Td>
	);
}
