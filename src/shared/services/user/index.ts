import instance from '../axios.config';

import {
	IBodyUser,
	ICreateUserResponse,
	IUser,
} from '@shared/interfaces';

import { IUserService } from './interfaces';

const userServices = (): IUserService => {
   
	async function createUser(body: IBodyUser): Promise<ICreateUserResponse> {
		return instance.post('/user/create', body);
	}

	async function updateMyUser(body: IBodyUser): Promise<IUser> {
		return instance.put('/user/update', body);
	}

	async function myAccount(): Promise<IUser> {
		return instance.get('/user/my-account');
	}

	return { createUser, updateMyUser, myAccount };
};

export default userServices;
