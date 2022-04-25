import Button from '../../UI/Buttons/Button';
import Icon from '../../UI/Icon';

import { CartItemProps } from '@shared/types';

import { formatNumbers } from '@shared/utils';

import { Text, TextContainer, TextRegular, theme } from '@shared/styles';

import { CartItemContainer, CartItemInfo } from './styles';

const CartItem = ({
	color,
	numbers,
	gameName,
	gamePrice,
	onDeleteItem,
}: CartItemProps): JSX.Element => {
	return (
		<CartItemContainer>
			<Button onPressHandler={onDeleteItem}>
				<Icon icon='trash-outline' size={25} color={theme.colors.grey06} />
			</Button>
			<CartItemInfo color={color}>
				<Text fontSize={15} color={theme.colors.grey07} alignLeft>
					{formatNumbers(numbers.join(','))}
				</Text>
				<TextContainer>
					<Text fontSize={15} color={color} alignLeft>
						{gameName}
					</Text>
					<TextRegular fontSize={15} color={theme.colors.grey07}>
						{gamePrice}
					</TextRegular>
				</TextContainer>
			</CartItemInfo>
		</CartItemContainer>
	);
};

export default CartItem;
