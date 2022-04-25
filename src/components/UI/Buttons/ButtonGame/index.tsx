import { ButtonGameProps } from '@shared/types';

import { theme, Text } from '@shared/styles';

import { ButtonContainer } from './styles';

const ButtonGame = ({
	name,
	color,
	isSelected,
	onPressHandler,
}: ButtonGameProps): JSX.Element => {
	return (
		<ButtonContainer
			color={color}
			isSelected={isSelected}
			onPress={onPressHandler}>
			<Text fontSize={12} color={isSelected ? theme.colors.white01 : color}>
				{name}
			</Text>
		</ButtonContainer>
	);
};

export default ButtonGame;
