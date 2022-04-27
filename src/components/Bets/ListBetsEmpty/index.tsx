import { useNavigation } from '@react-navigation/native';

import Icon from '../../UI/Icon';
import Button from '../../UI/Buttons/Button';

import { useAppDispatch } from '@hooks';

import { resetQuerys } from '@store/bets-slice';

import { theme, Text } from '@shared/styles';

import { Navigation } from '@shared/types'; 

import { ListBetsEmptyContainer } from './styles';

const ListBetsEmpty = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { navigate } = useNavigation<Navigation>();

	const goToNewBet = () => {
		dispatch(resetQuerys());
		navigate('NewBet');
	};

	return (
		<ListBetsEmptyContainer>
			<Icon icon='md-sad-outline' size={40} color={theme.colors.grey06} />
			<Text fontSize={24} color={theme.colors.grey06}>
				You don't have any bets yet...
			</Text>
			<Button onPressHandler={goToNewBet}>
				<Text fontSize={20} color={theme.colors.green01}>
					Chosse a bet?
				</Text>
			</Button>
		</ListBetsEmptyContainer>
	);
};

export default ListBetsEmpty;
