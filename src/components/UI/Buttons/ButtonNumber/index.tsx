import { ButtonNumberProps } from '@shared/types';

import { theme, TextBoldRegular } from '@shared/styles';

import { ButtonNumberContainer } from './styles';

const ButtonNumber = ({
	text,
	color,
	onPressHandler,
}: ButtonNumberProps): JSX.Element => {
	return (
		<ButtonNumberContainer backgroundColor={color} onPress={onPressHandler}>
			<TextBoldRegular fontSize={13} color={theme.colors.white01}>
				{text}
			</TextBoldRegular>
		</ButtonNumberContainer>
	);
};

export default ButtonNumber;
