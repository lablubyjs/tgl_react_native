import instance from '../axios.config';

import { IBodyBet, IListBetsResponse, INewBetResponse } from '@interfaces';

import { IBets } from './interfaces';

const betsServices = (): IBets => {
   
	async function listBets(url: string): Promise<IListBetsResponse> {
		return instance.get(url);
	}

	async function newBet(body: IBodyBet): Promise<INewBetResponse> {
		return instance.post('bet/new-bet', body);
	}

	return { listBets, newBet };
};

export default betsServices;
