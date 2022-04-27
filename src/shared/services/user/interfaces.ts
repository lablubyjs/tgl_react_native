import {
	IBodyUser,
	ICreateUserResponse,
	IUser,
} from '@shared/interfaces';

export interface IUserService {
   createUser: ({ email, password, name }: IBodyUser) => Promise<ICreateUserResponse>;

   updateMyUser: ({ email, name }: IBodyUser) => Promise<IUser>;

   myAccount: () => Promise<IUser>;
}