import styled from 'styled-components/native';

interface IButtonContainerProps {
	padding: number;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonContainerProps>`
	padding: ${({ padding }) => (padding ? `${padding}px` : 0)};
	align-items: center;
	justify-content: center;
	flex-direction: row;
	overflow: hidden;
`;
