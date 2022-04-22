import { Ionicons } from '@expo/vector-icons';

import { IconButtonProps } from '@types';

import { IconContainer } from './styles';

const IconButton = ({ icon, size, color }: IconButtonProps): JSX.Element => {
	return (
		<IconContainer>
			<Ionicons name={icon} size={size} color={color} />
		</IconContainer>
	);
};

export default IconButton;
