import Icon from '../Icon';

import { theme } from '@shared/styles';

import { ImagePicture, ImagePictureContainer, Picture } from './styles';

const Image = ({ picture }): JSX.Element => {
	let image = (
		<Icon icon='person-circle' size={150} color={theme.colors.grey05} />
	);

	if (picture) {
		image = <Picture source={{ uri: picture }} />;
	}

	return (
		<ImagePictureContainer>
			<ImagePicture>{image}</ImagePicture>
		</ImagePictureContainer>
	);
};

export default Image;
