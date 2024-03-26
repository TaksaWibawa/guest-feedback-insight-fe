import { IconButton } from '@chakra-ui/react';

export function ButtonIconOutline({ icon, onClick, isActive, ...props }) {
	return (
		<IconButton
			boxSize={10}
			icon={icon}
			onClick={onClick}
			isActive={isActive}
			_active={{
				bgColor: 'brand.500',
				color: 'white',
			}}
			{...props}
		/>
	);
}
