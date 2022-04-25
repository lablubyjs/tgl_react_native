import { ButtonActionProps } from '@shared/types';

import { TextBoldRegular } from '@shared/styles';

import { ButtonContainer } from './styles';

const ButtonAction = ({
	name,
	color,
	backgroundColor,
	onPressHandler,
	width,
	children,
}: ButtonActionProps): JSX.Element => {
	return (
		<ButtonContainer
			color={color}
			onPress={onPressHandler}
			width={width}
			backgroundColor={backgroundColor}>
			{children}
			<TextBoldRegular fontSize={15} color={color}>
				{name}
			</TextBoldRegular>
		</ButtonContainer>
	);
};

export default ButtonAction;
