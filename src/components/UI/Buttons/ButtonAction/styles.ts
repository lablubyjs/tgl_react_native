import styled from 'styled-components/native';

interface IButtonGameProps {
	color: string;
	backgroundColor: string;
	width: number;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonGameProps>`
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: ${({ width }) => `${width}px`};
	height: 35px;
	border-radius: 10px;
	border-color: ${({ color }) => color};
	border-width: 1px;
	margin: 5px;
`;
