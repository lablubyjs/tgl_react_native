import React from 'react';
import { TextInputProps } from 'react-native';

import { Control, FieldError } from 'react-hook-form';

import {
	IListBetsResponse,
	IGameType,
	IUser,
	IToken,
	IGame,
} from '@shared/interfaces';

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

export type IconProps = {
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
	error?: FieldError;
};

export type BetsSlice = {
	bets: IListBetsResponse | [];
	querys: string[];
};

export type GamesSlice = {
	list: IGameType[];
	currentGame: IGameType;
};

export type UserSlice = {
	user: IUser | {};
	token: IToken | {};
};

export type Navigation = {
	navigate: (value: string) => void;
};

export type ButtonGameProps = {
	name: string;
	color: string;
	isSelected: boolean;
	onPressHandler: () => void;
};

export type BetItemProps = {
	color: string;
	numbers: string;
	date: any;
	price: number;
	name: string;
};

export type CartItemProps = {
	color: string;
	numbers: number[];
	gameName: string;
	gamePrice: string;
	onDeleteItem: () => void;
};

export type GameActionsProps = {
	onCompleteGame: () => void;
	onClearGame: () => void;
	onAddToCart: () => void;
};

export type GamesNumbersProps = {
	range: number;
	gameColor: string;
	numbers: number[];
	onAddNumber: (number: number) => void;
	onRemoveNumber: (number: number) => void;
};

export type ButtonActionProps = {
	name: string;
	color: string;
	backgroundColor: string;
	onPressHandler: () => void;
	width: number;
	children?: React.ReactNode;
};

export type ButtonNumberProps = {
	text: string;
	color: string;
	onPressHandler: () => void;
};

export type ModalProps = {
	children: React.ReactNode;
	isVisible: boolean;
};

export type CartComponentProps = {
	cartItems: IGame[];
	cartTotal: number;
	onSave: () => void;
	onDeleteItem: (index: number, game_id: number, numbers: number[]) => void;
};
