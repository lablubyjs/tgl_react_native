import styled from 'styled-components/native';

interface ITextProps {
	fontSize: number;
	color: string;
	padding?: number;
	alignLeft?: boolean;
}

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white03};
`;

export const ContainerModal = styled.View`
	background-color: red;
	width: 80%;
	min-height: 40%;
	border-radius: 30px;
	align-items: center;
	justify-content: center;
	padding: 50px;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.white01};
`;

export const Content = styled.View`
	flex: 1;
	padding: 20px;
	width: 100%;
	height: 100%;
`;

export const Text = styled.Text<ITextProps>`
	padding: ${({ padding }) => (padding ? `${padding}px` : 0)};
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	color: ${({ color }) => color};
	text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
`;

export const TextRegular = styled.Text<ITextProps>`
	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ color }) => color};
	margin-left: 10px;
`;
export const TextBoldRegular = styled.Text<ITextProps>`
	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ color }) => color};
	text-align: center;
`;

export const TextLight = styled.Text<ITextProps>`
	font-family: ${({ theme }) => theme.fonts.italic};
	color: ${({ theme }) => theme.colors.grey04};
	padding: ${({ padding }) => (padding ? `${padding}px` : 0)};
`;

export const TextLightItalic = styled.Text<ITextProps>`
	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-family: ${({ theme }) => theme.fonts.lightItalic};
	color: ${({ color }) => color};
	margin-left: 10px;
`;

export const TextContainer = styled.View`
	padding: 10px 5px;
	flex-direction: row;
`;

export const shimmerPlaceholderStyle = {
	flex: 1,
	width: '100%',
};
