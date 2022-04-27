export const getGamePriceNumber = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return Number(gameSelected.price);
};
