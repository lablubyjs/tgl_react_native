import {
	IBodyUser,
	ICreateUserResponse,
	IMyAccountResponse,
	IUpdateUserResponse,
} from '@shared/interfaces';

export interface IUser {
   createUser: ({ email, password, name }: IBodyUser) => Promise<ICreateUserResponse>;

   updateMyUser: ({ email, name }: IBodyUser) => Promise<IUpdateUserResponse>;

   myAccount: () => Promise<IMyAccountResponse>;
}