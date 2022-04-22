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
	IconButton,
	ControlledInput,
	Loading,
} from '@components';

import { useAppDispatch } from '@hooks';

import { userServices } from '@services';

import { addUser } from '@store/user-slice';

import { FormValues } from '@types';

import { theme, Container, Title } from '@styles';

const schema = yup.object({
	name: yup.string().required('Please enter a name'),
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
	password: yup.string().required('Please enter the password'),
});

const Registration = ({ navigation }): JSX.Element => {
	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState(false);

	const [seePasswordItens, setSeePasswordItens] = useState({ prop: true, icon: 'eye' });

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

	const { createUser } = userServices();

	const onRegistrationHandler = async (data: FormValues) => {
		try {
			setLoading(true);

			const response = await createUser({
				name: data.name!,
				email: data.email!,
				password: data.password!,
			});

			setLoading(false);
			dispatch(addUser(response));
			
		} catch (error: any) {
			setLoading(false);

			Alert.alert('Registration failed', error.error.message, [{ text: 'OK' }]);
		}
	};

	const backToAuthenticationScreen = () => {
		navigation.navigate('Authentication');
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
						<Form title='Registration'>
							<ControlledInput
								name='name'
								control={control}
								placeholder='Name'
								error={errors.name}
							/>
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
							<Button
								onPressHandler={handleSubmit(onRegistrationHandler)}
								padding={15}>
								<Title fontSize={35} color={theme.colors.green01}>
									Register
								</Title>
								<IconButton
									icon='arrow-forward-outline'
									size={35}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={backToAuthenticationScreen} padding={15}>
							<IconButton
								icon='arrow-back-outline'
								size={35}
								color={theme.colors.grey08}
							/>
							<Title fontSize={35} color={theme.colors.grey08}>
								Back
							</Title>
						</Button>
						<Footer marginTop={25} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default Registration;
