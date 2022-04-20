import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { betsServices } from '@services';

import { IListBetsResponse } from '@interfaces';

import { BetsSlice } from '@types';

const { listBets } = betsServices();

const initialBetsState: BetsSlice = {
	bets: [],
	querys: ['/bet/all-bets?'],
};

const betsSlice = createSlice({
	name: 'bets',

	initialState: initialBetsState,

	reducers: {
		addBets: (state, action: PayloadAction<IListBetsResponse>) => {
			state.bets = action.payload.bets;
		},

		addQuery: (state, action: PayloadAction<string>) => {
			state.querys.push(`type%5B%5D=${action.payload}&`);
		},

		removeQuery: (state, action: PayloadAction<string>) => {
			state.querys = state.querys.filter((query: string) => {
				return query !== `type%5B%5D=${action.payload}&`;
			});
		},

		resetQuerys: (state) => {
			state.querys = initialBetsState.querys;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(
			asyncAddBets.fulfilled,
			(state, action: PayloadAction<IListBetsResponse>) => {
				state.bets = action.payload.bets;
			}
		);
	},
});

export const asyncAddBets = createAsyncThunk(
	'bets/fetchAddBets',
	async (url: string): Promise<IListBetsResponse> => {
		const response = await listBets(url);
		return response;
	}
);

export const { addBets, addQuery, removeQuery, resetQuerys } = betsSlice.actions;

export default betsSlice.reducer;
