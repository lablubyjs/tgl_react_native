import { IBodyBet, IListBetsResponse, INewBetResponse } from '@shared/interfaces';

export interface IBets {
	listBets: (url: string) => Promise<IListBetsResponse>;
	newBet: ({ games }: IBodyBet) => Promise<INewBetResponse>;
}
