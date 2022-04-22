import styled from 'styled-components/native';

interface IInputProps {
	isFocused: boolean;
}

export const InputContainer = styled.View<IInputProps>`
	padding: 10px;
	flex-direction: row;
	border-bottom-width: 2px;
	border-bottom-color: ${({ theme, isFocused }) =>
		isFocused ? theme.colors.green01 : theme.colors.grey01};
`;

export const InputText = styled.TextInput`
	flex: 5;
	color: ${({ theme }) => theme.colors.grey08};
	padding: 0 20px;
	font-family: ${({ theme }) => theme.fonts.boldItalic};
	font-size: 16px;
`;
