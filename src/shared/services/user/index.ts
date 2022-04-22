import instance from '../axios.config';

import {
	IBodyUser,
	ICreateUserResponse,
	IMyAccountResponse,
	IUpdateUserResponse,
} from '@shared/interfaces';

import { IUser } from './interfaces';

const userServices = (): IUser => {
   
	async function createUser(body: IBodyUser): Promise<ICreateUserResponse> {
		return instance.post('/user/create', body);
	}

	async function updateMyUser(body: IBodyUser): Promise<IUpdateUserResponse> {
		return instance.put('/user/update', body);
	}

	async function myAccount(): Promise<IMyAccountResponse> {
		return instance.post('/user/my-account');
	}

	return { createUser, updateMyUser, myAccount };
};

export default userServices;
