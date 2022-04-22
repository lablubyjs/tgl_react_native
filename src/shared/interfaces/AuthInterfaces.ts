import { IToken, IUser } from './index';

export interface IBodyAuth {
	email?: string;
	password?: string;
}

export interface ILoginResponse {
	user: IUser;
	token: IToken;
}

export interface IResetResponse {
	id: number;
	email: string;
	is_admin: number;
	name: string;
	token: string;
	token_created_at: Date;
	created_at: Date;
	updated_at: Date;
}

export interface IChangeResponse {
	id: number;
	email: string;
	is_admin: number;
	name: string;
	created_at: Date;
	updated_at: Date;
}
