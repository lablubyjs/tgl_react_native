import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoginResponse } from '@interfaces';

import { userServices } from '@services';

import { UserSlice } from '@types';

const { myAccount } = userServices();

const initialUserState: UserSlice = {
	user: {},
	token: {},
};

const userSlice = createSlice({
	name: 'user',

	initialState: initialUserState,

	reducers: {
		addUser: (state, action: PayloadAction<ILoginResponse>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},

		removeUser: (state) => {
			state.user = initialUserState.user;
			state.token = initialUserState.token;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export const asyncAddUser = createAsyncThunk('user/fetchAddUser', async () => {
	const response = await myAccount();
	return response;
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
