import { ActivityIndicator } from 'react-native';

import { theme } from '@shared/styles';

import { LoadingContainer } from './style';

const Loading = (): JSX.Element => {
	return (
		<LoadingContainer>
			<ActivityIndicator size='large' color={theme.colors.green01} />
		</LoadingContainer>
	);
};

export default Loading;
