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

import { authServices } from '@shared/services';

import { FormValues } from '@shared/types';

import { theme, Container, Title } from '@shared/styles';

const schema = yup.object({
	password: yup.string().required('Please enter the password'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must be the same')
		.required('Please enter the password confirm'),
});

const ChangePassword = ({ navigation, route }): JSX.Element => {
	const [loading, setLoading] = useState(false);

	const [seePasswordItens, setSeePasswordItens] = useState({ prop: true, icon: 'eye' });

	const [seePasswordConfirmItens, setSeePasswordConfirmItens] = useState({
		prop: true,
		icon: 'eye',
	});

	const seePasswordHandler = () => {
		setSeePasswordItens((prevSeePasswordItems) => ({
			prop: !prevSeePasswordItems.prop,
			icon: prevSeePasswordItems.icon === 'eye' ? 'eye-off' : 'eye',
		}));
	};

	const seePasswordConfirmHandler = () => {
		setSeePasswordConfirmItens((prevSeePasswordConfirmItems) => ({
			prop: !prevSeePasswordConfirmItems.prop,
			icon: prevSeePasswordConfirmItems.icon === 'eye' ? 'eye-off' : 'eye',
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

	const { changePassword } = authServices();

	const onChangePasswordHandler = async (data: FormValues) => {
		try {
			setLoading(true);
			
			await changePassword(
				{
					password: data.password!,
				},
				route.params.token
			);

			setLoading(false);
			Alert.alert('Sucess', 'Change password successfully', [
				{ text: 'OK', onPress: () => navigation.navigate('Authentication') },
			]);

		} catch (error: any) {
			reset({ password: '', passwordConfirm: '' });

			setLoading(false);

			Alert.alert('Change password failed', error.message, [
				{ text: 'OK', onPress: () => navigation.navigate('Authentication') },
			]);
		}
	};

	const backToResetPasswordScreen = () => {
		navigation.navigate('ResetPassword');
	};

	if (loading) {
		<Loading />;
	}

	return (
		<Container>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior='position'>
					<>
						<Slogan />
						<Form title='Change password'>
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
							<ControlledInput
								name='passwordConfirm'
								control={control}
								placeholder='Password Confirm'
								autoCapitalize='none'
								secureTextEntry={seePasswordConfirmItens.prop}
								error={errors.passwordConfirm}>
								<Button onPressHandler={seePasswordConfirmHandler}>
									<IconButton
										icon={seePasswordConfirmItens.icon}
										size={20}
										color={theme.colors.grey08}
									/>
								</Button>
							</ControlledInput>
							<Button
								onPressHandler={handleSubmit(onChangePasswordHandler)}
								padding={15}>
								<Title fontSize={35} color={theme.colors.green01}>
									Change
								</Title>
								<IconButton
									icon='arrow-forward-outline'
									size={35}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={backToResetPasswordScreen} padding={15}>
							<IconButton
								icon='arrow-back-outline'
								size={35}
								color={theme.colors.grey08}
							/>
							<Title fontSize={35} color={theme.colors.grey08}>
								Back
							</Title>
						</Button>
						<Footer marginTop={50} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default ChangePassword;
