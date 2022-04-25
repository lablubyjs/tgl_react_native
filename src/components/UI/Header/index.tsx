import { useNavigation } from '@react-navigation/native';

import Button from '../Buttons/Button';
import Icon from '../Icon';
import Logo from '../Logo';

import { Navigation } from '@shared/types';

import { theme } from '@shared/styles';

import { HeaderContainer } from './styles';

const Header = ({ onMenuHandler }): JSX.Element => {
	const { navigate } = useNavigation<Navigation>();

	const goToHomeScreen = () => {
		navigate('Home');
	};

	return (
		<HeaderContainer>
			<Button onPressHandler={goToHomeScreen}>
				<Logo />
			</Button>
			<Button onPressHandler={onMenuHandler}>
				<Icon icon='menu' size={40} color={theme.colors.grey08} />
			</Button>
		</HeaderContainer>
	);
};

export default Header;
