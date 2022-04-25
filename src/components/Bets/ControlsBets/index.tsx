import { useNavigation } from '@react-navigation/native';

import ButtonGame from '../../UI/Buttons/ButtonGame';
import Button from '../../UI/Buttons/Button';
import Icon from '../../UI/Icon';

import { useAppDispatch, useAppSelector } from '@hooks';

import { addQuery, removeQuery } from '@store/bets-slice';
import { selectGame } from '@store/games-slice';

import { Navigation } from '@shared/types';

import { theme, Text, TextLight } from '@shared/styles';

import {
	ControlsBetsContainer,
	FiltersButtons,
	FiltersContainer,
} from './styles';

const ControlsBets = ({ games }): JSX.Element => {
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.bets.querys);

	const { navigate } = useNavigation<Navigation>();

	const goToNewBetScreen = () => {
		navigate('NewBet');
	};

	const renderButtonsHandler = ({ item }) => {
		const onPressHandler = () => {
			const type = `type%5B%5D=${item.type}&`;

			if (url.includes(type)) {
				dispatch(removeQuery(item.type));
			} else {
				dispatch(addQuery(item.type));
			}

			dispatch(selectGame(item.id));
		};

		return (
			<ButtonGame
				name={item.type}
				color={item.color}
				isSelected={item.isSelected}
				onPressHandler={onPressHandler}
			/>
		);
	};

	return (
		<ControlsBetsContainer>
			<Text fontSize={24} color={theme.colors.grey08}>
				RECENT GAMES
			</Text>
			<FiltersContainer>
				<TextLight>Filters</TextLight>
				<FiltersButtons
					data={games}
					renderItem={renderButtonsHandler}
					keyExtractor={(item) => item.id}
					numColumns={3}
				/>
				<Button onPressHandler={goToNewBetScreen}>
					<Text fontSize={23} color={theme.colors.green01}>
						New Bet
					</Text>
					<Icon
						icon='arrow-forward-outline'
						size={30}
						color={theme.colors.green01}
					/>
				</Button>
			</FiltersContainer>
		</ControlsBetsContainer>
	);
};

export default ControlsBets;
