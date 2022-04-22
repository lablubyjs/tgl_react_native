import { ButtonProps } from '@types';

import { ButtonContainer } from './styles';

const Button = ({
	children,
	onPressHandler,
	padding,
}: ButtonProps): JSX.Element => {
	return (
		<ButtonContainer padding={padding} onPress={onPressHandler}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
