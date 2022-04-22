import styled from 'styled-components/native';

export const FormContainer = styled.View`
	margin: 20px 25px 0 25px;
	align-items: center;
`;

export const Content = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white01};
	margin: 8px;
	border-radius: 15px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.grey03};
`;
