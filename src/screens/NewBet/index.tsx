import { useEffect, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';

import {
	Header,
	Footer,
	Menu,
	Modal,
	GamesControls,
	GamesNumbers,
	GamesActions,
	ButtonAction,
	Icon,
} from '@components';

import { useAppDispatch, useAppSelector } from '@hooks';

import { addToCart } from '@store/cart-slice';
import {
	asyncAddGames,
	resetSelectedGame,
	selectFirstGame,
} from '@store/games-slice';

import { completeArray } from '@shared/utils';

import {
	Container,
	Content,
	TextContainer,
	theme,
	Text,
	TextLight,
	TextLightItalic,
	ContainerModal,
} from '@shared/styles';

const NewBet = (): JSX.Element => {
	const [numbers, setNumbers] = useState<number[]>([]);
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const games = useAppSelector((state) => state.games.list);
	const selectedGame = useAppSelector<any>((state) => state.games.currentGame);

	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		dispatch(selectFirstGame());
	}, []);

	useEffect(() => {
		setNumbers([]);
	}, [selectedGame.range]);

	const showMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	const addNumberHandler = (number) => {
		if (numbers.length === selectedGame.max_number) {
			setModalMessage(
				'Game is already complete, please clear the game or add to cart.'
			);
			setShowModal(true);
		} else {
			setNumbers((prevState) => [...prevState, number]);
		}
	};

	const removeNumberHandler = (number) => {
		setNumbers((prevState) => prevState.filter((item) => item !== number));
	};

	const clearGameHandler = () => {
		setNumbers([]);
	};

	const completeGameHandler = () => {
		if (numbers.length === selectedGame.max_number) {
			setModalMessage(
				'Game is already complete, please clear the game or add to cart.'
			);
			setShowModal(true);
		} else {
			setNumbers(
				completeArray(numbers, selectedGame.max_number, selectedGame.range)
			);
		}
	};

	const addToCartHandler = () => {
		if (numbers.length < selectedGame.max_number) {
			const missingNumbers = selectedGame.max_number - numbers.length;

			setModalMessage(
				`Game is not complete, please add more ${missingNumbers} ${
					missingNumbers > 1 ? 'numbers' : 'number'
				} to complete the game.`
			);
			setShowModal(true);
		} else {
			setNumbers(numbers.sort((a, b) => a - b));
			dispatch(
				addToCart({
					game: { game_id: selectedGame.id, numbers: numbers },
					price: selectedGame.price,
				})
			);
			Alert.alert('Sucess', 'Game successfully added to cart', [
				{ text: 'OK' },
			]);
			setNumbers([]);
		}
	};

	if (showMenu) {
		return <Menu closeMenu={showMenuHandler} />;
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
					<Text fontSize={20} color={theme.colors.grey08}>
						{modalMessage}
					</Text>
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
			<Content>
				<TextContainer>
					<Text fontSize={24} color={theme.colors.grey08}>
						NEW BET
					</Text>
					<TextLightItalic fontSize={24} color={theme.colors.grey08}>
						FOR {selectedGame.type.toUpperCase()}
					</TextLightItalic>
				</TextContainer>
				<Text fontSize={17} color={theme.colors.grey07} padding={5} alignLeft>
					Choose a game
				</Text>
				<GamesControls games={games} />
				<Text fontSize={17} color={theme.colors.grey07} padding={5} alignLeft>
					Fill your bet
				</Text>
				<TextLight padding={5}>{selectedGame.description}</TextLight>
				<GamesNumbers
					range={selectedGame.range}
					gameColor={selectedGame.color}
					numbers={numbers}
					onAddNumber={addNumberHandler}
					onRemoveNumber={removeNumberHandler}
				/>
				<GamesActions
					onClearGame={clearGameHandler}
					onCompleteGame={completeGameHandler}
					onAddToCart={addToCartHandler}
				/>
			</Content>
			<Footer marginTop={0} />
		</Container>
	);
};

export default NewBet;
