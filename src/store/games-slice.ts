import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGameType, IListGamesReponse } from '@interfaces';

import { gamesServices } from '@services';

import { GamesSlice } from '@types';

const { listGames } = gamesServices();

const initialGamesState: GamesSlice = {
	list: [],
	currentGame: {},
};

const gamesSlices = createSlice({
	name: 'games',

	initialState: initialGamesState,

	reducers: {
		addGames: (state, action: PayloadAction<IListGamesReponse>) => {
			state.list = action.payload.types;
		},

		selectGame: (state, action: PayloadAction<number>) => {
			const gameIndex = state.list.findIndex((game) => game.id === action.payload);
			state.list[gameIndex].isSelected = true;
		},

		selectedGame: (state, action: PayloadAction<number>) => {
			state.list.map((game) => {
				if (game.id === action.payload) {
					game.isSelected = true;
					state.currentGame = game;
				} else {
					game.isSelected = false;
				}
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddGames.fulfilled, (state, action) => {
			state.list = action.payload;
			state.currentGame = action.payload[0];
		});
	},
});

export const asyncAddGames = createAsyncThunk(
	'games/fetchAddGames',
	async () => {
		const response = await listGames();
		return response.types;
	}
);

export const { addGames, selectedGame, selectGame } = gamesSlices.actions;

export default gamesSlices.reducer;
