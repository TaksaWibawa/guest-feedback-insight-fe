import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

export function ModalBase({ isOpen, onClose, children, size }) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={size || { base: 'sm', md: 'xl' }}
			isCentered
			scrollBehavior={'inside'}
		>
			<ModalOverlay />
			<ModalContent
				bg="white"
				borderRadius="md"
				mx="auto"
			>
				<ModalCloseButton />
				{children}
			</ModalContent>
		</Modal>
	);
}
