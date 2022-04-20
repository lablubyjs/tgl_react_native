import React from 'react';

import { IBet, IGameType, IUser, IToken } from '@interfaces';

export type FormProps = {
	children: React.ReactNode;
	title: string;
	goTo?: string;
	onGoTo?: () => {};
	onSubmit?: () => {};
};

export type ButtonProps = {
	children: React.ReactNode;
	onPressHandler: () => void;
};

export type IconButtonProps = {
	icon: any;
	size: number;
	color: string;
};

export type BetsSlice = {
	bets: IBet[] | [];
	querys: string[];
};

export type GamesSlice = {
	list: IGameType[],
	currentGame: IGameType | {}
}

export type UserSlice = {
	user: IUser | {},
	token: IToken | {}
}
