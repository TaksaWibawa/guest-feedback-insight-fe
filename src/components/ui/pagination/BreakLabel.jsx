import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

export const BreakLabel = () => {
	const breakLabelRef = useRef();

	useEffect(() => {
		const breakLabelElement = breakLabelRef.current;

		const handleClick = (event) => {
			event.stopPropagation();
		};

		breakLabelElement.addEventListener('click', handleClick);

		return () => {
			breakLabelElement.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<Box
			ref={breakLabelRef}
			borderRadius={'md'}
			cursor={'default'}
		>
			...
		</Box>
	);
};
