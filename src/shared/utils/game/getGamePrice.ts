import { useAppSelector } from '@hooks';

import { formatValueToCurrency } from '../formatValueToCurrency';

export const getGamePrice = (id: number) => {
	const games = useAppSelector((state) => state.games.list);

	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return formatValueToCurrency(gameSelected!.price.toString());
};
