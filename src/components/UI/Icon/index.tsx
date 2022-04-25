import { Ionicons } from '@expo/vector-icons';

import { IconProps } from '@shared/types';

import { IconContainer } from './styles';

const Icon = ({ icon, size, color }: IconProps): JSX.Element => {
	return (
		<IconContainer>
			<Ionicons name={icon} size={size} color={color} />
		</IconContainer>
	);
};

export default Icon;
