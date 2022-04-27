import { useEffect, useLayoutEffect, useState } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { LinearGradient } from 'expo-linear-gradient';

import {
	Header,
	Menu,
	Footer,
	ControlsBets,
	ListBets,
	ListBetsEmpty,
} from '@components';

import { useAppDispatch, useAppSelector } from '@hooks';

import { Container, shimmerPlaceholderStyle } from '@shared/styles';

import { asyncAddBets } from '@store/bets-slice';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Home = (): JSX.Element => {
	const [showMenu, setShowMenu] = useState(false);

	const bets = useAppSelector<any>((state) => state.bets.bets);
	const games = useAppSelector((state) => state.games.list);
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.bets.querys.join(''));

	const isVisible = bets.length < 0 || games.length !== 0;

	const showMenuHandler = () => {
		setShowMenu(!showMenu);
	};
	
	useLayoutEffect(() => {
		dispatch(asyncAddBets(url));
	}, [url]);

	if (showMenu) {
		return <Menu closeMenu={showMenuHandler} />;
	}

	return (
		<Container>
			<Header onMenuHandler={showMenuHandler} />
			<ControlsBets games={games} />
			<ShimmerPlaceholder style={shimmerPlaceholderStyle} visible={isVisible}>
				{bets.length > 0 ? (
					<ListBets bets={bets} games={games} />
				) : (
					<ListBetsEmpty />
				)}
			</ShimmerPlaceholder>
			<Footer marginTop={10} />
		</Container>
	);
};

export default Home;
