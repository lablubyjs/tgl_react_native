import styled from 'styled-components/native';

interface IItemProps {
	color: string;
}

export const CartItemContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	margin-bottom: 25px;
`;

export const CartItemInfo = styled.View`
	width: 75%;
	height: 86px;
	border-left-color: ${({ color }) => color};
	border-left-width: 4px;
	padding: 10px;
	border-radius: 5px;
	justify-content: space-around;
`;
