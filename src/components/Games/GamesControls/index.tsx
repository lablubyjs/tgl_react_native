import { useEffect, useLayoutEffect } from 'react';
import ButtonGame from '../../UI/Buttons/ButtonGame';

import { useAppDispatch } from '@hooks';

import {
	asyncAddGames,
	selectedGame,
	selectFirstGame,
} from '@store/games-slice';

import { GamesControlsContainer, GamesButtons, GamesContainer } from './styles';

const GamesControls = ({ games }): JSX.Element => {
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		const fetchGames = async () => {
			await dispatch(asyncAddGames());
			await dispatch(selectFirstGame());
		};
		fetchGames();
	}, []);

	const renderButtonsHandler = ({ item }) => {
		const onPressHandler = () => {
			dispatch(selectedGame(item.id));
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
		<GamesControlsContainer>
			<GamesContainer>
				<GamesButtons
					data={games}
					renderItem={renderButtonsHandler}
					keyExtractor={(item) => item.id}
					numColumns={3}
				/>
			</GamesContainer>
		</GamesControlsContainer>
	);
};

export default GamesControls;
