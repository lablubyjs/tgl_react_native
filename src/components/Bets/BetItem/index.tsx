import { BetItemProps } from '@shared/types';

import {
	formatDate,
	formatNumbers,
	formatValueToCurrency,
} from '@shared/utils';

import { Text } from '@shared/styles';

import {
	BetItemContainer,
	BetItemInfo,
	BetItemInfoDateAndPrice,
	BetItemInfoNumbers,
	Strip,
} from './styles';

const BetItem = ({
	color,
	name,
	numbers,
	price,
	date,
}: BetItemProps): JSX.Element => {
	return (
		<BetItemContainer>
			<Strip color={color} />
			<BetItemInfo>
				<BetItemInfoNumbers>{formatNumbers(numbers)}</BetItemInfoNumbers>
				<BetItemInfoDateAndPrice>
					{formatDate(date)} - ({formatValueToCurrency(price)})
				</BetItemInfoDateAndPrice>
				<Text fontSize={17} color={color} alignLeft>
					{name}
				</Text>
			</BetItemInfo>
		</BetItemContainer>
	);
};

export default BetItem;
