import React, { useState } from 'react';

import { InputProps } from '@types';

import { InputContainer, InputText } from './styles';

const Input = ({ children, value, ...rest }: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	function handleInputFocus() {
		setIsFocused(true);
	}

	function handleInputBlur() {
		setIsFocused(false);
		setIsFilled(!!value);
	}

	return (
		<InputContainer isFocused={isFocused}>
			<InputText
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				value={value}
				{...rest}
			/>
			{children}
		</InputContainer>
	);
};

export default Input;
