import instance from '../axios.config';

import {
	IChangeResponse,
	IResetResponse,
	IBodyAuth,
	ILoginResponse,
} from '@interfaces';

import { IAuth } from './interfaces';

const authServices = (): IAuth => {

	async function login(body: IBodyAuth): Promise<ILoginResponse> {
		return instance.post('/login', body);
	}

	async function resetPassword(body: IBodyAuth): Promise<IResetResponse> {
		return instance.post('/reset', body);
	}

	async function changePassword(body: IBodyAuth, token: string): Promise<IChangeResponse> {
      return instance.post(`/reset/${token}`, body)
   }

	return { login, resetPassword, changePassword };
};

export default authServices;
