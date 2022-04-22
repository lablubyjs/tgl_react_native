import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Authentication,
	ChangePassword,
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

export default AuthNavigation;
