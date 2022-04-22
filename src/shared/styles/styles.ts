import styled from 'styled-components/native';

interface ITextProps {
	fontSize: number;
	color: string;
}

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white03};
`;

export const Title = styled.Text<ITextProps>`
	padding: 8px;
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	color: ${({ color }) => color};
	text-align: center;
`;

export const TitleLight = styled.Text`
	font-family: ${({ theme }) => theme.fonts.italic};
	color: ${({ theme }) => theme.colors.grey04};
`;
