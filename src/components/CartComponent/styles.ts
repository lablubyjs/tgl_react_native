import styled from 'styled-components/native';

export const CartContainer = styled.View`
	width: 100%;
	align-items: center;
	margin: 50px 0 50px;
`;

export const CartContent = styled.View`
	width: 317px;
	height: 484px;
	background-color: ${({ theme }) => theme.colors.white01};
	border-radius: 10px;
`;

export const CartItems = styled.FlatList`
	width: 100%;
`;

export const CartEmpty = styled.View`
	width: 100%;
	height: 40%;
	padding: 50px;
	align-items: center;
	justify-content: center;
`;

export const CartTotal = styled.View`
	flex-direction: row;
	padding: 40px;
`;
