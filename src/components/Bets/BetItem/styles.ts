import styled from 'styled-components/native';

interface IStripProps {
	color: string;
}

export const BetItemContainer = styled.View`
	width: 100%;
	flex-direction: row;
	padding: 0 45px 10px 30px;
	margin-bottom: 10px;
`;

export const Strip = styled.View<IStripProps>`
	width: 6px;
	height: 100%;
	border-radius: 100px;
	background-color: ${({ color }) => color};
	margin-right: 15px;
`;

export const BetItemInfo = styled.View`
	flex-direction: column;
`;

export const BetItemInfoNumbers = styled.Text`
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: 17px;
	color: ${({ theme }) => theme.colors.grey08};
	margin-bottom: 10px;
`;

export const BetItemInfoDateAndPrice = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 15px;
	color: ${({ theme }) => theme.colors.grey08};
	margin-bottom: 10px;
`;
