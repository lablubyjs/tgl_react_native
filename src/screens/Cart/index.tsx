import { useState } from 'react';
import { Alert } from 'react-native';

import {
	Button,
	ButtonAction,
	CartComponent,
	Footer,
	Header,
	Icon,
	Menu,
	Modal,
	Loading,
} from '@components';

import { useAppDispatch, useAppSelector } from '@hooks';

import { betsServices } from '@shared/services';

import { emptyCart, removeToCart } from '@store/cart-slice';
import { asyncAddBets, resetQuerys } from '@store/bets-slice';
import { asyncAddGames, selectFirstGame } from '@store/games-slice';

import { formatValueToCurrency, getGamePriceNumber } from '@shared/utils';

import {
	Container,
	ContainerModal,
	Content,
	Text,
	theme,
} from '@shared/styles';

const Cart = ({ navigation }): JSX.Element => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(<></>);
	const [loading, setLoading] = useState(false);

	const games = useAppSelector((state) => state.games.list);
	const gamesInCart = useAppSelector((state) => state.cart.games);
	const minCartValue = useAppSelector((state) => state.cart.minCartValue);
	const cartTotal = useAppSelector((state) => state.cart.cartTotal);

	const { newBet } = betsServices();

	const dispatch = useAppDispatch();

	const showMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	const goBackHandler = async () => {
		navigation.goBack();
	};

	const goToHomeScreen = async () => {
		navigation.navigate('Home');
	};

	const newBetHandler = async () => {
		try {
			await newBet({ games: gamesInCart });
			dispatch(emptyCart());

			setLoading(false);

			Alert.alert('Sucess', 'Successfully saved games', [
				{ text: 'OK', onPress: goToHomeScreen },
			]);
		} catch (error: any) {
			setLoading(false);

			Alert.alert('Failed to save games', error.message, [
				{ text: 'OK', onPress: goToHomeScreen },
			]);
		}
	};

	const saveHandler = () => {
		setShowModal(true);

		if (cartTotal < minCartValue) {
			setModalContent(
				<>
					<Text fontSize={20} color={theme.colors.grey08}>
						{`Minimum amount not reached, please add more ${formatValueToCurrency(
							minCartValue - cartTotal
						)} in games to save bet.`}
					</Text>
				</>
			);
		} else {
			setModalContent(
				<>
					<Text fontSize={20} color={theme.colors.grey08}>
						{`You have in ${formatValueToCurrency(
							cartTotal
						)} games. Do you want to save?`}
					</Text>
					<ButtonAction
						onPressHandler={newBetHandler}
						name='Confirm'
						color={theme.colors.white01}
						backgroundColor={theme.colors.green02}
						width={100}
						children={null}
					/>
				</>
			);
		}
	};

	const deleteItem = (index) => {
		const price = getGamePriceNumber(games, gamesInCart[index].game_id);
		dispatch(removeToCart({ index, price }));
		setShowModal(false);
	};

	const deleteItemHandler = (index) => {
		setShowModal(true);
		setModalContent(
			<>
				<Text fontSize={20} color={theme.colors.grey08}>
					Do you really want to delete the item from the cart?
				</Text>
				<ButtonAction
					onPressHandler={deleteItem.bind(this, index)}
					name='Confirm'
					color={theme.colors.white01}
					backgroundColor={theme.colors.green02}
					width={100}
					children={null}
				/>
			</>
		);
	};

	if (showMenu) {
		return <Menu closeMenu={showMenuHandler} />;
	}

	if (loading) {
		<Loading />;
	}

	if (showModal) {
		return (
			<Modal isVisible={showModal}>
				<ContainerModal>
					<Icon
						color={theme.colors.grey08}
						icon='alert-circle-outline'
						size={50}
					/>
					{modalContent}
					<ButtonAction
						onPressHandler={() => setShowModal(false)}
						name='Close'
						color={theme.colors.green02}
						backgroundColor={theme.colors.white01}
						width={100}
						children={null}
					/>
				</ContainerModal>
			</Modal>
		);
	}

	return (
		<Container>
			<Header onMenuHandler={showMenuHandler} />

			<CartComponent
				cartItems={gamesInCart}
				cartTotal={cartTotal}
				onDeleteItem={deleteItemHandler}
				onSave={saveHandler}
			/>

			<Button onPressHandler={goBackHandler}>
				<Icon icon='arrow-back' size={40} color={theme.colors.grey08} />
			</Button>

			<Footer marginTop={30} />
		</Container>
	);
};

export default Cart;
