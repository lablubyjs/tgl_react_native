import styled from "styled-components/native";

export const FormContainer = styled.View`
	margin-top: 15px;
   width: 100%;
	height: 50%;
	align-items: center;
`;

export const Content = styled.View`
	background-color: ${({ theme }) => theme.colors.white01};
	width: 100%;
	height: 60%;
	margin: 8px;
	border-radius: 15px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.grey03};
`