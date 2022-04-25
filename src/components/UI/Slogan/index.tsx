import { theme, Text } from '@shared/styles';

import { Content, TextContainer } from './styles';

const Slogan = (): JSX.Element => {
	return (
		<Content>
			<Text fontSize={45} color={theme.colors.grey08}>
				The Geatest App
			</Text>
			<TextContainer>
				<Text fontSize={15} color={theme.colors.white01}>
					for
				</Text>
			</TextContainer>
			<Text fontSize={52} color={theme.colors.grey08}>
				LOTTERY
			</Text>
		</Content>
	);
};

export default Slogan;
