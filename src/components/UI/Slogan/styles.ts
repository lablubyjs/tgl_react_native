import styled from 'styled-components/native';

export const Content = styled.View`
	padding: 10px;
	margin-top: 35px;
	width: 95%;
	align-items: center;
	justify-content: space-between;
`;

export const TextContainer = styled.View`
	background-color: ${({ theme }) => theme.colors.green01};
	justify-content: center;
	width: 114px;
	height: 35px;
	border-radius: 100px;
`;
