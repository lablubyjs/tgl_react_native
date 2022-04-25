import LinkComponent from '../../UI/LinkComponent';
import Icon from '../../UI/Icon';

import { theme, Text } from '@shared/styles';

import { ListBetsEmptyContainer } from './styles';

const ListBetsEmpty = (): JSX.Element => {
	return (
		<ListBetsEmptyContainer>
			<Icon icon='md-sad-outline' size={40} color={theme.colors.grey06} />
			<Text fontSize={24} color={theme.colors.grey06}>
				You don't have any bets yet...
			</Text>
			<LinkComponent goTo={{ screen: 'NewBet' }}>
				<Text fontSize={20} color={theme.colors.green01}>
					Chosse a bet?
				</Text>
			</LinkComponent>
		</ListBetsEmptyContainer>
	);
};

export default ListBetsEmpty;
