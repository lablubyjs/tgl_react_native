import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { Login } from '@screens';

import { theme } from '@styles';

export default function App() {
	const [loadedFonts] = useFonts({
		'Helvetica-Neue-Bold': require('./assets/fonts/Helvetica-Neue-Bold.ttf'),
		'Helvetica-Neue-Bold-Italic': require('./assets/fonts/Helvetica-Neue-Bold-Italic.ttf'),
		'Helvetica-Neue-Italic': require('./assets/fonts/Helvetica-Neue-Italic.ttf'),
		'Helvetica-Neue-Light': require('./assets/fonts/Helvetica-Neue-Light.ttf'),
		'Helvetica-Neue-Light-Italic': require('./assets/fonts/Helvetica-Neue-Light-Italic.ttf'),
		'Helvetica-Neue-Medium': require('./assets/fonts/Helvetica-Neue-Medium.ttf'),
		'Helvetica-Neue-Regular': require('./assets/fonts/Helvetica-Neue-Regular.ttf'),
	});

	if (!loadedFonts) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style='auto' />
			<Login />
		</ThemeProvider>
	);
}
