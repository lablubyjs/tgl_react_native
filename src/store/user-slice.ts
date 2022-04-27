import AsyncStorage from '@react-native-async-storage/async-storage';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICreateUserResponse, ILoginResponse, IUser } from '@shared/interfaces';

import { userServices } from '@shared/services';

import { UserSlice } from '@shared/types';

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
			AsyncStorage.setItem('token', action.payload.token!.token);
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});

		builder.addCase(asyncRemoveUser.fulfilled, (state) => {
			state.user = initialUserState.user;
			state.token = initialUserState.token;
		});
	},
});

export const asyncAddUser = createAsyncThunk('user/fetchAddUser', async () => {
	const response = await myAccount();
	return response;
});

export const asyncRemoveUser = createAsyncThunk(
	'user/fetchRemoveUser',
	async () => {
		await AsyncStorage.removeItem('token');
	}
);

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
