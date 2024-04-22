import { CircularProgress, Flex } from '@chakra-ui/react';

export function LoadingBase({ size, ...props }) {
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			{...props}
		>
			<CircularProgress
				isIndeterminate
				color="brand.500"
				size={size || '100px'}
				thickness="8px"
			/>
		</Flex>
	);
}
