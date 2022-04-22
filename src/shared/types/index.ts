import React from 'react';
import { TextInputProps } from 'react-native';

import { Control, FieldError } from 'react-hook-form';

import { IBet, IGameType, IUser, IToken } from '@interfaces';

export type FormProps = {
	children: React.ReactNode;
	title: string;
};

export type FormValues = {
	name?: string;
	email?: string;
	password?: string;
	passwordConfirm?: string;
};

export type ButtonProps = {
	children: React.ReactNode;
	onPressHandler: (data?: any) => any;
	padding?: number;
};

export type IconButtonProps = {
	icon: any;
	size: number;
	color: string;
};

export type InputProps = TextInputProps & {
	children?: React.ReactNode;
	value?: string;
};

export type ControlledInputProps = InputProps & {
	control: Control<any>;
	name: string;
	error?: FieldError
};

export type BetsSlice = {
	bets: IBet[] | [];
	querys: string[];
};

export type GamesSlice = {
	list: IGameType[];
	currentGame: IGameType | {};
};

export type UserSlice = {
	user: IUser | {};
	token: IToken | {};
};
