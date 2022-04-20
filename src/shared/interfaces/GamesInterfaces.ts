export interface IBodyGames {
	type: string;
	description: string;
	range: number;
	price: number;
	max_number: number;
	color: string;
}

export interface ICreateGameResponse extends IBodyGames {}

export interface IUpdateGameResponse {
	id: number;
	type: string;
	description: string;
	range: number;
	price: number;
	max_number: number;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IListGamesReponse {
	min_cart_value: number;
	types: IGameType[];
}

export interface IGameType {
	id: number;
	type: string;
	description: string;
	range: number;
	price: number;
	max_number: number;
	color: string;
	isSelected?: boolean;
}
