import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	fonts: {
		body: 'Inter, system-ui, sans-serif',
		heading: 'Inter, system-ui, sans-serif',
	},
	colors: {
		brand: {
			100: '#E7EE99',
			200: '#D2E373',
			300: '#BEDC4D',
			400: '#A7C927',
			500: '#8DB600',
			600: '#6A8F00',
		},
		customGray: {
			100: '#DDDDDD',
			200: '#A9A9A9',
			300: '#8D8D8D',
			400: '#5F5F5F',
			500: '#424242',
		},
	},
});
