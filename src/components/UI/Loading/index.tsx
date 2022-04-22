import { ActivityIndicator } from 'react-native';

import { theme } from '@styles';

import { LoadingContainer } from './style';

const Loading = () => {
	return (
		<LoadingContainer>
			<ActivityIndicator size='large' color={theme.colors.green01} />
		</LoadingContainer>
	);
};

export default Loading;
