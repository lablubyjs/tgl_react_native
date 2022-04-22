import instance from '../axios.config';

import {
	IBodyGames,
	ICreateGameResponse,
	IListGamesReponse,
	IUpdateGameResponse,
} from '@interfaces';

import { IGames } from './interfaces';

const gamesServices = (): IGames => {
	async function createGame(body: IBodyGames): Promise<ICreateGameResponse> {
		return instance.post('/admin/create-game', body);
	}

	async function updateGame(body: IBodyGames, id: string): Promise<IUpdateGameResponse> {
      return instance.put(`/admin/update-game/${id}`, body);
   }

	async function listGames(): Promise<IListGamesReponse> {
      return instance.get('/cart_games');
   }

	async function deleteGame(id: string): Promise<string> {
      return instance.delete(`/admin/delete-game/${id}`);
   }

	return { createGame, updateGame, listGames, deleteGame };
};

export default gamesServices;
