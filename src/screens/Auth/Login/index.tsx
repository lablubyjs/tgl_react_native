import { Slogan, Form, Footer, Button } from '@components';

import { theme, Container, Title } from '@styles';

const Login = (): JSX.Element => {
	return (
		<Container>
			<Slogan />
			<Form title='Registration'>
				<Button
					arrow='left'
					showIcon
					title='Register'
					fontSize={35}
					color={theme.colors.green01}
				/>
			</Form>
			<Footer />
		</Container>
	);
};

export default Login;
