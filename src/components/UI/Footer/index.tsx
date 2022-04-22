import { Content, Copyright } from './styles';

const Footer = ({ marginTop }): JSX.Element => {
	return (
		<Content marginTop={marginTop}>
			<Copyright>Copyright 2020 Luby Software</Copyright>
		</Content>
	);
};

export default Footer;
