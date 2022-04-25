import Icon from '../../UI/Icon';

import { Text, theme } from '@shared/styles';

import { CartSaveContainer } from './styles';

const CartSave = ({ onPressHandler }): JSX.Element => {
	return (
		<CartSaveContainer onPress={onPressHandler}>
			<Text fontSize={30} color={theme.colors.green02}>
				Save
			</Text>
			<Icon
				icon='arrow-forward-outline'
				size={35}
				color={theme.colors.green02}
			/>
		</CartSaveContainer>
	);
};

export default CartSave;
