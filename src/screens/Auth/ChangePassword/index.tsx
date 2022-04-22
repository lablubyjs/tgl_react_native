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
	password: yup.string().required('Please enter the password'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must be the same')
		.required('Please enter the confirm password'),
});

const ChangePassword = ({ navigation }): JSX.Element => {
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

	const { changePassword } = authServices();

	const onChangePasswordHandler = (data: FormValues) => {
		try {
			changePassword(
				{
					password: data.password!,
				},
				'token'
			);
		} catch (error) {
			if (error) {
				console.log(error);
			}
		}
	};

	const backToResetPasswordScreen = () => {
		navigation.navigate('ResetPassword')
	}

	return (
		<Container>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior='position'>
					<>
						<Slogan />
						<Form title='Registration'>
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
								placeholder='Password'
								autoCapitalize='none'
								secureTextEntry={seePasswordItens.prop}
								error={errors.passwordConfirm}>
								<Button onPressHandler={seePasswordHandler}>
									<IconButton
										icon={seePasswordItens.icon}
										size={20}
										color={theme.colors.grey08}
									/>
								</Button>
							</ControlledInput>
							<Button
								onPressHandler={handleSubmit(onChangePasswordHandler)}
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
						<Footer marginTop={30} />
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default ChangePassword;
