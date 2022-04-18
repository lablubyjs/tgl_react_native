import React from 'react';

export type FormProps = {
	children: React.ReactNode;
	title: string;
	goTo?: string;
	onGoTo?: () => {};
	onSubmit?: () => {};
};

export type ButtonProps = {
	arrow?: string;
	title: string;
	onGoTo?: () => void;
	fontSize: number;
	color: string;
	showIcon?: boolean;
};
