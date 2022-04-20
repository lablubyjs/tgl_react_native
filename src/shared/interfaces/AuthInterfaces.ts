export interface IBodyAuth {
	email?: string;
	password?: string;
}

export interface ILoginResponse {
	user: User;
	token: Token;
}

interface User {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: null;
	tokenCreatedAt: null;
	createdAt: Date;
	updatedAt: Date;
	picture: null;
}

interface Token {
	type: string;
	token: string;
	expires_at: string;
}

export interface IResetResponse {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: string;
	tokenCreatedAt: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface IChangeResponse {
	id: number;
	email: string;
	is_admin: number;
	name: string;
	created_at: Date;
	updated_at: Date;
}
