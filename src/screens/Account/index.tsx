import React, { useState } from 'react';
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
	Menu,
	Header,
	Footer,
	Form,
	ControlledInput,
	Button,
	Icon,
	Loading,
	Image,
} from '@components';

import { useAppDispatch, useAppSelector } from '@hooks';

import { userServices } from '@shared/services';

import { asyncAddUser } from '@store/user-slice';
import { asyncAddGames } from '@store/games-slice';
import { asyncAddBets, resetQuerys } from '@store/bets-slice';

import { FormValues } from '@shared/types';

import { Container, theme, Text } from '@shared/styles';

const schema = yup.object({
	name: yup.string().required('Please enter a name'),
	email: yup
		.string()
		.email('Please provide a valid email')
		.required('Please enter the email'),
});

const Account = ({ navigation }): JSX.Element => {
	const user = useAppSelector<any>((state) => state.user.user);
	const dispatch = useAppDispatch();

	const { updateMyUser } = userServices();

	const [loading, setLoading] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: user.name,
			email: user.email,
		},
	});

	const showMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	const goBackHandler = () => {
		dispatch(asyncAddGames());
		dispatch(resetQuerys());
		dispatch(asyncAddBets('/bet/all-bets'));
		navigation.goBack();
	};

	const onAuthenticationHandler = async (data: FormValues) => {
		try {
			setLoading(true);

			await updateMyUser({
				name: data.name!,
				email: data.email!,
			});

			setLoading(false);
			await dispatch(asyncAddUser());
			Alert.alert('Sucess', 'Successfully changed data', [{ text: 'OK' }]);
		} catch (error: any) {
			setLoading(false);
			Alert.alert('Change data failed', error.message, [{ text: 'OK' }]);
		}
	};

	if (loading) {
		return <Loading />;
	}

	if (showMenu) {
		return <Menu closeMenu={showMenuHandler} />;
	}

	return (
		<Container>
			<Header onMenuHandler={showMenuHandler} />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior='position'>
					<>
						<Form title='My Account'>
							<Image picture={user.picture ? user.picture.file : null} />
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

							<Button
								onPressHandler={handleSubmit(onAuthenticationHandler)}
								padding={10}>
								<Text fontSize={25} color={theme.colors.green01}>
									Change Data
								</Text>
								<Icon
									icon='save-outline'
									size={30}
									color={theme.colors.green01}
								/>
							</Button>
						</Form>
						<Button onPressHandler={goBackHandler} padding={10}>
							<Icon icon='arrow-back' size={50} color={theme.colors.grey08} />
						</Button>
					</>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
			<Footer marginTop={220} />
		</Container>
	);
};

export default Account;
