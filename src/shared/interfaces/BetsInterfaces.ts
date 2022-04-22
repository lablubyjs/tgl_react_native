export interface IBodyBet {
	games: IGame[];
}

export interface IGame {
	game_id: number;
	numbers: number[];
}

export interface IListBetsResponse {
	bets: IBet[];
}

export interface IBet {
	id: number;
	user_id: number;
	game_id: number;
	choosen_numbers: string;
	price: number;
	created_at: Date;
	updated_at?: Date;
	type?: Type;
}

interface Type {
	id: number;
	type: string;
}

export interface INewBetResponse {
	bet: IBet[];
}
