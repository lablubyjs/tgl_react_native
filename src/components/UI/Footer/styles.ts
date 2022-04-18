import styled from 'styled-components/native';

export const Content = styled.View`
	padding: 15px;
	width: 150%;
	align-items: center;
	justify-content: space-between;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.colors.grey01};
`;

export const Copyright = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: 15px;
`