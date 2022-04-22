import { Link } from '@react-navigation/native';
import { LinkContainer } from './style';

const LinkComponent = ({ goTo, children }): JSX.Element => {
	return (
		<LinkContainer>
			<Link to={goTo}>{children}</Link>
		</LinkContainer>
	);
};

export default LinkComponent;
