import { FormProps } from '@shared/types';

import { theme, Title } from '@shared/styles';

import { Content, FormContainer } from './styles';

const Form = ({ children, title }: FormProps): JSX.Element => {
	return (
		<FormContainer>
			<Title fontSize={35} color={theme.colors.grey08}>
				{title}
			</Title>
			<Content>{children}</Content>
		</FormContainer>
	);
};

export default Form;
