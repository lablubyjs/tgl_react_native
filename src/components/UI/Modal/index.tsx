import { ModalProps } from '@shared/types';

import { ModalContainer, ModalContent } from './styles';

const Modal = ({ children, isVisible }: ModalProps): JSX.Element => {
	return (
		<ModalContainer animationType='fade' visible={isVisible}>
			<ModalContent>{children}</ModalContent>
		</ModalContainer>
	);
};

export default Modal;
