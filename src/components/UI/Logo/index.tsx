import { theme, Text } from '@shared/styles';

import { LogoContainer, Strip } from './styles';

const Logo = (): JSX.Element => {
	return (
		<LogoContainer>
			<Text fontSize={44} color={theme.colors.grey08}>
				TGL
			</Text>
			<Strip />
		</LogoContainer>
	);
};

export default Logo;
