import { FormProps } from '@shared/types';

import { theme, Text } from '@shared/styles';

import { Content, FormContainer } from './styles';

const Form = ({ children, title }: FormProps): JSX.Element => {
	return (
		<FormContainer>
			<Text fontSize={35} color={theme.colors.grey08}>
				{title}
			</Text>
			<Content>{children}</Content>
		</FormContainer>
	);
};

export default Form;
