import { useState } from 'react';
import {
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import {
	Slogan,
	Form,
	Footer,
	Button,
	Icon,
	ControlledInput,
	LinkComponent,
	Loading,
} from '@components';

import { useAppDispatch } from '@hooks';

import { authServices } from '@shared/services';

import { addUser } from '@store/user-slice';

import { FormValues } from '@shared/types';

import { theme, Container, Text, TextLight } from '@shared/styles';

const schema = yup.object({
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
	password: yup.string().required('Please enter the password'),
});

const Authentication = ({ navigation }): JSX.Element => {
	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState(false);

	const [seePasswordItens, setSeePasswordItens] = useState({
		prop: true,
		icon: 'eye',
	});

	const seePasswordHandler = () => {
		setSeePasswordItens((prevSeePasswordItems) => ({
			prop: !prevSeePasswordItems.prop,
			icon: prevSeePasswordItems.icon === 'eye' ? 'eye-off' : 'eye',
		}));
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const { login } = authServices();

	const onAuthenticationHandler = async (data: FormValues) => {
		try {
			setLoading(true);

			const response = await login({
				email: data.email!,
				password: data.password!,
			});

			setLoading(false);
			await dispatch(addUser(response));

		} catch (error: any) {
			reset({ email: '', password: '' });
			
			setLoading(false);
			Alert.alert('Log in failed', error.message, [{ text: 'OK' }]);
		}
	};

	const goToSingUpScreen = () => {
		navigation.navigate('Registration');
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<Container>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior='position'>
					<>
						<Slogan />
						<Form title='Authentication'>
							<ControlledInput
								name='email'
								control={control}
								placeholder='Email'
								keyboardType='email-address'
								autoCapitalize='none'
								autoCorrect={false}
								error={errors.email}
							/>
							<ControlledInput
								name='password'
								control={control}
								placeholder='Password'
								autoCapitalize='none'
								secureTextEntry={seePasswordItens.prop}
								error={errors.password}>
								<Button onPressHandler={seePasswordHandler}>
									<Icon
										icon={seePasswordItens.icon}
										size={20}
										color={theme.colors.grey08}
									/>
								</Button>
							</ControlledInput>
							<LinkComponent goTo={{ screen: 'ResetPassword' }}>
								<TextLight fontSize={15} color={theme.colors.grey04}>
									I forget my password
								</TextLight>
							</LinkComponent>
							<Button
								onPressHandler={handleSubmit(onAuthenticationHandler)}
								padding={15}>
								<Text fontSize={35} color={theme.colors.green01}>
									Log In
								</Text>
								<Icon
									icon='arrow-forward-outline'
									size={35}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={goToSingUpScreen} padding={15}>
							<Text fontSize={35} color={theme.colors.grey08}>
								Sign Up
							</Text>
							<Icon
								icon='arrow-forward-outline'
								size={35}
								color={theme.colors.grey08}
							/>
						</Button>
						<Footer marginTop={50} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default Authentication;
