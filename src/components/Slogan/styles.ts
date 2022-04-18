import styled from 'styled-components/native';

export const Content = styled.View`
	margin-top: 15px;
   width: 75%;
	height: 37%;
	align-items: center;
	justify-content: space-between;
`;

export const TitleContainer = styled.View`
	background-color: ${({ theme }) => theme.colors.green01};
	justify-content: center;
	width: 114px;
	height: 35px;
	border-radius: 100px;
`;
