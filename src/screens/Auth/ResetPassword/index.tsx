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
} from '@components';

import { authServices } from '@services';

import { FormValues } from '@types';

import { theme, Container, Title } from '@styles';

const schema = yup.object({
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
});

const ResetPassword = ({ navigation }): JSX.Element => {
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

	const { resetPassword } = authServices();

	const onResetPasswordHandler = (data: FormValues) => {
		try {
			resetPassword({
				email: data.email!,
			});
		} catch (error) {
			if (error) {
				console.log(error);
			}
		}
	};

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
