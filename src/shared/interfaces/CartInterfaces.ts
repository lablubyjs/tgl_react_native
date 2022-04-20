import { IListGamesReponse, IGame } from './index';

export interface ICart {
   minCartValue: IListGamesReponse['min_cart_value']
   games: IGame[]
   cartTotal: number
}