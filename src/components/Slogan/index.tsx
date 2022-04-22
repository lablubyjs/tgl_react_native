import { theme, Title } from '@shared/styles';

import { Content, TitleContainer } from './styles';

const Slogan = (): JSX.Element => {
	return (
		<Content>
			<Title fontSize={45} color={theme.colors.grey08}>
				The Geatest App
			</Title>
			<TitleContainer>
				<Title fontSize={15} color={theme.colors.white01}>
					for
				</Title>
			</TitleContainer>
			<Title fontSize={52} color={theme.colors.grey08}>
				LOTTERY
			</Title>
		</Content>
	);
};

export default Slogan;
