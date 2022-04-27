import { useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppDispatch, useAppSelector } from '@hooks';

import {
	Account,
	Authentication,
	ChangePassword,
	NewBet,
	Home,
	Registration,
	ResetPassword,
	Cart,
} from '@screens';

import { asyncAddBets } from '@store/bets-slice';
import { asyncAddGames } from '@store/games-slice';
import { asyncAddMinCartValue } from '@store/cart-slice';
import { asyncAddUser } from '@store/user-slice';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='Authentication' component={Authentication} />
				<Stack.Screen name='ChangePassword' component={ChangePassword} />
				<Stack.Screen name='Registration' component={Registration} />
				<Stack.Screen name='ResetPassword' component={ResetPassword} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const UserNavigation = () => {
	const [isFetched, setIsFetched] = useState(false);
	const dispatch = useAppDispatch();

	const url = useAppSelector((state) => state.bets.querys.join(''));

	useLayoutEffect(() => {
		const fetchData = async () => {
			await dispatch(asyncAddGames());
			await dispatch(asyncAddMinCartValue());
			await dispatch(asyncAddUser());
			await dispatch(asyncAddBets(url));
			setIsFetched(true);
		};

		fetchData();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='NewBet' component={NewBet} />
				<Stack.Screen name='Account' component={Account} />
				<Stack.Screen name='Cart' component={Cart} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const AppNavigation = () => {
	const [token, setToken] = useState<any>();
	const userToken = useAppSelector((state) => state.user.token);

	useLayoutEffect(() => {
		const fetchToken = async () => {
			setToken(await AsyncStorage.getItem('token'));
		};

		fetchToken();
	}, [userToken]);

	return token ? <UserNavigation /> : <AuthNavigation />;
};

export default AppNavigation;
