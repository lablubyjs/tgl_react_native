import { IBodyBet, IListBetsResponse, INewBetResponse } from '@interfaces';

export interface IBets {
	listBets: (url: string) => Promise<IListBetsResponse>;
	newBet: ({ games }: IBodyBet) => Promise<INewBetResponse>;
}
