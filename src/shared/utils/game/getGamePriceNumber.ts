import { useAppSelector } from '@hooks';

export const getGamePriceNumber = (id: number) => {
	const games = useAppSelector((state) => state.games.list);

	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return Number(gameSelected!.price);
};
