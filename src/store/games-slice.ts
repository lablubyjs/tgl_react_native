import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGameType, IListGamesReponse } from '@shared/interfaces';

import { gamesServices } from '@shared/services';

import { GamesSlice } from '@shared/types';

const { listGames } = gamesServices();

const initialGamesState: GamesSlice = {
	list: [],
	currentGame: {
		color: '',
		description: '',
		id: 0,
		max_number: 0,
		price: 0,
		range: 0,
		type: '',
		isSelected: false,
	},
};

const gamesSlices = createSlice({
	name: 'games',

	initialState: initialGamesState,

	reducers: {
		addGames: (state, action: PayloadAction<IListGamesReponse>) => {
			state.list = action.payload.types;
		},

		selectGame: (state, action: PayloadAction<number>) => {
			state.list.filter((game) => {
				if (game.id === action.payload) {
					game.isSelected = !game.isSelected;
				}
			});
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

		selectFirstGame: (state) => {
			state.list[0].isSelected = true;
			state.currentGame = state.list[0];
		},

		resetSelectedGame: (state) => {
			state.list.map(game => game.isSelected = false)
		}
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddGames.fulfilled, (state, action) => {
			state.list = action.payload.map((item) => {
				const game = {
					color: item.color,
					description: item.description,
					id: item.id,
					max_number: item.max_number,
					price: item.price,
					range: item.range,
					type: item.type,
					isSelected: false,
				};

				return game;
			});
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

export const { addGames, selectedGame, selectGame, selectFirstGame, resetSelectedGame } =
	gamesSlices.actions;

export default gamesSlices.reducer;
