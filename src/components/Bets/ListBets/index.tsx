import BetItem from '../BetItem';

import { getGameColor } from '@shared/utils';

import { ListBetsContainer } from './styles';

const ListBets = ({ bets, games }): JSX.Element => {
	const renderBetsHandler = ({ item }) => {
		return (
			<BetItem
				color={getGameColor(games, item.game_id)}
				numbers={item.choosen_numbers}
				date={item.created_at}
				price={item.price}
				name={item.type.type}
			/>
		);
	};

	return <ListBetsContainer data={bets} renderItem={renderBetsHandler} />;
};

export default ListBets;
