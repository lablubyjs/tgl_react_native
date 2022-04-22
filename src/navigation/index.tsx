import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppSelector } from '@hooks';

import {
	Authentication,
	ChangePassword,
	Games,
	Home,
	Registration,
	ResetPassword,
} from '@screens';

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
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Games' component={Games} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const AppNavigation = () => {
	const token = useAppSelector((state) => state.user.token);
	
	return token['token'] ? <UserNavigation /> : <AuthNavigation />;
};

export default AppNavigation;