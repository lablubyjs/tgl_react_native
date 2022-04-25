import { theme } from '@shared/styles';
import styled from 'styled-components/native';

interface IButtonNumberProps {
	backgroundColor?: string;
}

export const ButtonNumberContainer = styled.TouchableOpacity<IButtonNumberProps>`
	align-content: center;
	justify-content: center;
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : theme.colors.grey10};
	width: 25px;
	height: 25px;
	border-radius: 100px;
	margin: 5px;
`;
