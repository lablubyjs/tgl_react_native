import { useState } from 'react';
import {
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
	IconButton,
	ControlledInput,
	LinkComponent,
} from '@components';

import { authServices } from '@services';

import { addUser } from '@store/user-slice';

import { useAppDispatch, useAppSelector } from '@hooks';

import { FormValues } from '@types';

import { theme, Container, Title, TitleLight } from '@styles';

const schema = yup.object({
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
	password: yup.string().required('Please enter the password'),
});

const Authentication = ({ navigation }): JSX.Element => {
	const { user } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

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
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const { login } = authServices();

	const onAuthenticationHandler = async (data: FormValues) => {
		try {
			const response = await login({
				email: data.email!,
				password: data.password!,
			});

			await dispatch(addUser(response));

			console.log(response);
		} catch (error) {
			if (error) {
				console.log(error);
			}
		}
	};

	const goToSingUpScreen = () => {
		navigation.navigate('Registration');
	};

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
									<IconButton
										icon={seePasswordItens.icon}
										size={20}
										color={theme.colors.grey08}
									/>
								</Button>
							</ControlledInput>
							<LinkComponent goTo={{ screen: 'ResetPassword' }}>
								<TitleLight fontSize={15} color={theme.colors.grey04}>
									I forget my password
								</TitleLight>
							</LinkComponent>
							<Button
								onPressHandler={handleSubmit(onAuthenticationHandler)}
								padding={15}>
								<Title fontSize={35} color={theme.colors.green01}>
									Log In
								</Title>
								<IconButton
									icon='arrow-forward-outline'
									size={35}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={goToSingUpScreen} padding={15}>
							<Title fontSize={35} color={theme.colors.grey08}>
								Sign Up
							</Title>
							<IconButton
								icon='arrow-forward-outline'
								size={35}
								color={theme.colors.grey08}
							/>
						</Button>
						<Footer marginTop={15} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default Authentication;
