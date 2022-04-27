import CartItem from './CartItem';
import CartSave from './CartSave';
import Icon from '../UI/Icon';

import { useAppSelector } from '@hooks';

import { CartComponentProps } from '@shared/types';

import {
	formatValueToCurrency,
	getGameColor,
	getGameName,
	getGamePrice,
} from '@shared/utils';

import { theme, Text, TextRegular } from '@shared/styles';

import {
	CartContainer,
	CartContent,
	CartEmpty,
	CartItems,
	CartTotal,
} from './styles';

const CartComponent = ({
	cartItems,
	cartTotal,
	onSave,
	onDeleteItem,
}: CartComponentProps): JSX.Element => {
	const games = useAppSelector((state) => state.games.list);

	const renderCartItensHandler = ({ item, index }) => {
		return (
			<CartItem
				color={getGameColor(games, item.game_id)}
				numbers={item.numbers}
				gameName={getGameName(games, item.game_id)}
				gamePrice={getGamePrice(games, item.game_id)}
				onDeleteItem={onDeleteItem.bind(
					this,
					index,
					item.game_id,
					item.numbers
				)}
			/>
		);
	};

	return (
		<CartContainer>
			<CartContent>
				<Text fontSize={20} color={theme.colors.grey08} alignLeft padding={30}>
					CART
				</Text>
				{cartItems.length > 0 ? (
					<CartItems
						data={cartItems}
						renderItem={renderCartItensHandler}
						keyExtractor={(item) => item.numbers}
					/>
				) : (
					<CartEmpty>
						<Icon icon='cart-outline' size={70} color={theme.colors.grey08} />
						<Text fontSize={20} color={theme.colors.grey08}>
							Your shopping cart is empty
						</Text>
					</CartEmpty>
				)}
				<CartTotal>
					<Text fontSize={20} color={theme.colors.grey08}>
						CART
					</Text>
					<TextRegular fontSize={20} color={theme.colors.grey08}>
						TOTAL: {formatValueToCurrency(cartTotal)}
					</TextRegular>
				</CartTotal>
				<CartSave onPressHandler={onSave} />
			</CartContent>
		</CartContainer>
	);
};

export default CartComponent;
