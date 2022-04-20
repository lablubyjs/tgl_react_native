import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import betsSlice from './bets-slice';
import cartSlice from './cart-slice';
import gamesSlice from './games-slice';
import userSlice from './user-slice';

const store = configureStore({
	reducer: {
		user: userSlice,
		bets: betsSlice,
		games: gamesSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

export default store;
