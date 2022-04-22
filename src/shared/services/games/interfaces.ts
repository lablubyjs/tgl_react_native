import {
	IBodyGames,
	ICreateGameResponse,
	IListGamesReponse,
	IUpdateGameResponse,
} from '@shared/interfaces';

export interface IGames {
	createGame: ({
		type,
		description,
		range,
		price,
		max_number,
		color,
	}: IBodyGames) => Promise<ICreateGameResponse>;

	updateGame: (
		{ type, description, range, price, max_number, color }: IBodyGames,
		id: string
	) => Promise<IUpdateGameResponse>;

	listGames: () => Promise<IListGamesReponse>;

	deleteGame: (id: string) => Promise<string>;
}
