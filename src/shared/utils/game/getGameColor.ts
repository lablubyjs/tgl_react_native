export const getGameColor = (games: any, id: number) => {
	const gameSelected = games.find((game: any) => {
		return game.id === id;
	});

	return gameSelected ? gameSelected!.color : 'transparent';
};
