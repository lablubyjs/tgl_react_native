import styled from 'styled-components/native';

interface ITextProps {
	fontSize: number;
	color: string;
}

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white03};
	padding: 25px;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.Text<ITextProps>`
	width: 100%;
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	color: ${({ color }) => color};
	text-align: center;
`;
