import { useNavigation } from '@react-navigation/native';

import Button from '../Buttons/Button';
import Icon from '../Icon';
import Header from '../Header';

import { useAppDispatch, useAppSelector } from '@hooks';

import { asyncRemoveUser } from '@store/user-slice';

import { Navigation } from '@shared/types';

import { Container, theme, Text } from '@shared/styles';

import { MenuContainer, MenuItemContainer } from './styles';
import { asyncAddGames } from '@store/games-slice';
import { asyncAddBets, resetQuerys } from '@store/bets-slice';

const Menu = ({ closeMenu }): JSX.Element => {
	const dispatch = useAppDispatch();
	const { navigate } = useNavigation<Navigation>();

	const logoutHandler = () => {
		dispatch(asyncRemoveUser());
	};

	const goToHomeScreenHandler = () => {
		dispatch(asyncAddGames());
		dispatch(resetQuerys());
		dispatch(asyncAddBets('/bet/all-bets'));
		navigate('Home');
		closeMenu();
	};

	const goToAccountScreenHandler = () => {
		navigate('Account');
		closeMenu();
	};

	const goToCartScreenHandler = () => {
		navigate('Cart');
		closeMenu();
	};

	return (
		<Container>
			<Header onMenuHandler={closeMenu} />
			<MenuContainer>
				<MenuItemContainer>
					<Button onPressHandler={goToHomeScreenHandler}>
						<Text fontSize={20} color={theme.colors.grey08}>
							Home
						</Text>
					</Button>
				</MenuItemContainer>
				<MenuItemContainer>
					<Button onPressHandler={goToAccountScreenHandler}>
						<Text fontSize={20} color={theme.colors.grey08}>
							Account
						</Text>
					</Button>
				</MenuItemContainer>
				<MenuItemContainer>
					<Button onPressHandler={goToCartScreenHandler}>
						<Text fontSize={20} color={theme.colors.grey08}>
							Cart
						</Text>
						<Icon icon='cart' size={25} color={theme.colors.grey08} />
					</Button>
				</MenuItemContainer>
				<MenuItemContainer>
					<Button onPressHandler={logoutHandler}>
						<Text fontSize={20} color={theme.colors.grey08}>
							Log out
						</Text>
						<Icon
							icon='arrow-forward-outline'
							size={25}
							color={theme.colors.grey08}
						/>
					</Button>
				</MenuItemContainer>
			</MenuContainer>
		</Container>
	);
};

export default Menu;
