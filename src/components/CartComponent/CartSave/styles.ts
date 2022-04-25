import styled from 'styled-components/native';

export const CartSaveContainer = styled.TouchableOpacity`
	width: 100%;
	height: 96px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.grey02};
	background-color: ${({ theme }) => theme.colors.white02};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;
