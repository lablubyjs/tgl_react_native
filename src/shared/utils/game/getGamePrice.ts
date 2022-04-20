import { formatValueToCurrency } from '../formatValueToCurrency';

export const getGamePrice = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return formatValueToCurrency(gameSelected.price);
};
