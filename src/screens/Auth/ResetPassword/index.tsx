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
	Loading,
} from '@components';

import { authServices } from '@shared/services';

import { FormValues } from '@shared/types';

import { theme, Container, Text } from '@shared/styles';

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
			setLoading(false);

			if (error.status === 404) {
				Alert.alert('Send Link Failed', 'Invalid credentials', [
					{ text: 'OK' },
				]);
			} else {
				Alert.alert('Send Link Failed', '', [{ text: 'OK' }]);
			}
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
								<Text fontSize={35} color={theme.colors.green01}>
									Send link
								</Text>
								<Icon
									icon='arrow-forward-outline'
									size={35}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={backToAuthenticationScreen} padding={15}>
							<Icon
								icon='arrow-back-outline'
								size={35}
								color={theme.colors.grey08}
							/>
							<Text fontSize={35} color={theme.colors.grey08}>
								Back
							</Text>
						</Button>
						<Footer marginTop={175} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default ResetPassword;
