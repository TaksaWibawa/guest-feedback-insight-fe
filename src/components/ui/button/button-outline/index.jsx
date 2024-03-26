import { Button } from '@chakra-ui/react';

export function ButtonOutline({ text, leftIcon, onClick, isActive, ...props }) {
	return (
		<Button
			paddingBlock={4}
			justifyContent={'flex-start'}
			leftIcon={leftIcon}
			_active={{
				bgColor: 'brand.500',
				color: 'white',
			}}
			onClick={onClick}
			isActive={isActive}
			{...props}
		>
			{text}
		</Button>
	);
}
