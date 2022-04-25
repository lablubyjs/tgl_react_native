import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom-color: ${({ theme }) => theme.colors.grey01};
	border-bottom-width: 2px;
	padding: 25px 15px 0 15px;
`;
