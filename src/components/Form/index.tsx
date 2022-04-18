import Button from '../UI/Button';

import { theme, Title } from '@styles';
import { FormProps } from '@types';

import { Content, FormContainer } from './styles';

const Form = ({ children, title }: FormProps) => {
	return (
		<FormContainer>
			<Title fontSize={35} color={theme.colors.grey08}>
				{title}
			</Title>
			<Content>{children}</Content>
			<Button
				arrow='rigth'
				showIcon
				title='Back'
				fontSize={35}
				color={theme.colors.grey08}
			/>
		</FormContainer>
	);
};

export default Form;
