import styled from 'styled-components/native';

export const Error = styled.Text`
	margin-top: 3px;
	color: ${({ theme }) => theme.colors.red01};
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: 14px;
	text-align: center;
`;
