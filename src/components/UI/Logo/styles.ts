import styled from 'styled-components/native';

export const LogoContainer = styled.View`
	align-items: stretch;
	align-items: center;
`;

export const Strip = styled.View`
	background-color: ${({ theme }) => theme.colors.green01};
	height: 10px;
	width: 107px;
	border-radius: 6px;
`;
