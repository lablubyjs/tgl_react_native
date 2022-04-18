import { Ionicons } from '@expo/vector-icons';

import { ButtonProps } from '@types';

import { ButtonContainer, ButtonTitle } from './styles';

const Button = ({
	color,
	fontSize,
	title,
	arrow,
	onGoTo,
	showIcon,
}: ButtonProps): JSX.Element => {
	let content = (
		<ButtonContainer onPress={onGoTo} color={color} fontSize={fontSize}>
			<ButtonTitle fontSize={fontSize} color={color}>
				{title}
			</ButtonTitle>
		</ButtonContainer>
	);

	if (showIcon) {
		content =
			arrow === 'left' ? (
				<ButtonContainer onPress={onGoTo} color={color} fontSize={fontSize}>
					<ButtonTitle fontSize={fontSize} color={color}>
						{title}
					</ButtonTitle>
					{showIcon && (
						<Ionicons
							name='arrow-forward-outline'
							size={fontSize}
							color={color}
						/>
					)}
				</ButtonContainer>
			) : (
				<ButtonContainer onPress={onGoTo} color={color} fontSize={fontSize}>
					{showIcon && (
						<Ionicons name='arrow-back-outline' size={fontSize} color={color} />
					)}
					<ButtonTitle fontSize={fontSize} color={color}>
						{title}
					</ButtonTitle>
				</ButtonContainer>
			);
	}

	return content;
};

export default Button;
