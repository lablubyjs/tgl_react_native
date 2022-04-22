import axios, { AxiosError } from 'axios';

import { useAppSelector } from '@hooks';

const instance = axios.create({
	baseURL: 'http://192.168.1.13:3333',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	async (config) => {
		const isToken = useAppSelector((state) => state.user.token['token']);

		if (isToken) {
			config.headers!.Authorization = `Bearer ` + isToken;
		}

		return config;
	},
	function (error: AxiosError) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	function (error: AxiosError) {
		if (error.response) {
			const handlerError = error.response.data;
			return Promise.reject(handlerError);
		}

		return Promise.reject(error);
	}
);

export default instance;
