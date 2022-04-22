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
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
});

const ResetPassword = ({ navigation }): JSX.Element => {
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const { resetPassword } = authServices();

	const onResetPasswordHandler = async (data: FormValues) => {
		try {
			setLoading(true);

			const response = await resetPassword({
				email: data.email!,
			});

			setLoading(false);
			navigation.navigate('ChangePassword', { token: response.token });

		} catch (error: any) {
			reset({ email: '' });

			setLoading(false);

			Alert.alert('Send Link Failed', error.message, [{ text: 'OK' }]);

		}
	};

	if (loading) {
		return <Loading />;
	}

	const backToAuthenticationScreen = () => {
		navigation.navigate('Authentication');
	};

	return (
		<Container>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior='position'>
					<>
						<Slogan />
						<Form title='Reset password'>
							<ControlledInput
								name='email'
								control={control}
								placeholder='Email'
								keyboardType='email-address'
								autoCapitalize='none'
								autoCorrect={false}
								error={errors.email}
							/>
							<Button
								onPressHandler={handleSubmit(onResetPasswordHandler)}
								padding={15}>
								<Title fontSize={35} color={theme.colors.green01}>
									Send link
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
						<Footer marginTop={120} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default ResetPassword;
