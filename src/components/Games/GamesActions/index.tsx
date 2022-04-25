import Icon from '../../UI/Icon';
import ButtonAction from '../../UI/Buttons/ButtonAction';

import { GameActionsProps } from '@shared/types';

import { theme } from '@shared/styles';

import { GamesActionsContainer } from './styles';

const GamesActions = ({
	onCompleteGame,
	onClearGame,
	onAddToCart,
}: GameActionsProps): JSX.Element => {
	return (
		<GamesActionsContainer>
			<ButtonAction
				name='Complete game'
				color={theme.colors.green02}
				backgroundColor='transparent'
				onPressHandler={onCompleteGame}
				width={150}
			/>
			<ButtonAction
				name='Clear game'
				color={theme.colors.green02}
				backgroundColor='transparent'
				onPressHandler={onClearGame}
				width={130}
			/>
			<ButtonAction
				name='Add to cart'
				color={theme.colors.white01}
				backgroundColor={theme.colors.green02}
				width={164}
				onPressHandler={onAddToCart}>
				<Icon icon='cart' size={20} color={theme.colors.white01} />
			</ButtonAction>
		</GamesActionsContainer>
	);
};

export default GamesActions;
