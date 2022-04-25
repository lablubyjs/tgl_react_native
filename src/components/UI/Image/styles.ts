import styled from 'styled-components/native';

export const ImagePictureContainer = styled.View`
	width: 100%;
	padding: 20px;
	align-items: center;
	justify-content: center;
`;

export const ImagePicture = styled.View`
	align-items: center;
	justify-content: center;
	border-width: 5px;
	width: 180px;
	height: 180px;
	border-radius: 100px;
	border-color: ${({ theme }) => theme.colors.green01};
`;

export const Picture = styled.Image`
	width: 150px;
	height: 150px;
	border-radius: ${() => `${200 / 2}px`};
`;
