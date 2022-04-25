import styled from 'styled-components/native';

interface IButtonGameProps {
	color: string;
	isSelected: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonGameProps>`
	align-items: center;
	justify-content: center;
	background-color: ${({ isSelected, color }) =>
		isSelected ? color : 'transparent'};
	width: 100px;
	height: 30px;
	border-radius: 100px;
	border-color: ${({ color }) => color};
	border-width: 2px;
	margin: 5px;
`;
