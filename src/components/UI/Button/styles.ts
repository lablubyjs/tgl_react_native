import styled from 'styled-components/native';

interface IButtonTitleProps {
	fontSize: number;
	color: string;
}

export const ButtonContainer = styled.View`
	flex: 2;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const ButtonTitle = styled.Text`
	color: ${({ color }) => color};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-family: ${({ theme }) => theme.fonts.boldItalic};
`;
