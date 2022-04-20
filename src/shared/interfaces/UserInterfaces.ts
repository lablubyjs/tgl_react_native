export interface IBodyUser {
	email: string;
	password?: string;
	name: string;
}

export interface ICreateUserResponse {
	user: IUser;
	token: IToken;
}

export interface IToken {
	type: string;
	token: string;
	expiresAt: Date;
}

export interface IUser {
	email: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	id: number;
}

export interface IUpdateUserResponse {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: string;
	tokenCreatedAt: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface IMyAccountResponse {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: null;
	tokenCreatedAt: null;
	createdAt: Date;
	updatedAt: Date;
	bets?: any[];
	picture: null;
}
