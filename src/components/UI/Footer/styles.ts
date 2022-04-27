import styled from 'styled-components/native';

interface IFooterProps {
	marginTop: number;
}

export const Content = styled.View<IFooterProps>`
	height: 60px;
	align-items: center;
	justify-content: flex-end;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.colors.grey01};
	margin-top: ${({ marginTop }) => `${marginTop}px`};
	padding: 15px;
`;

export const Copyright = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 15px;
`;
