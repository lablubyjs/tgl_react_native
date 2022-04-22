import styled from 'styled-components/native';

interface IFooterProps {
	marginTop: number;
}

export const Content = styled.View<IFooterProps>`
	height: 50px;
	align-items: center;
	justify-content: center;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.colors.grey01};
	margin-top: ${({ marginTop }) => `${marginTop}px`};
	padding-top: 15px;
`;

export const Copyright = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 15px;
`;
