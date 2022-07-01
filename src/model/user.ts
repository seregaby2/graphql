import { IArtists, IContext, IUser } from '../interface';
import { methodGet } from '../utils/get';
import { methodPost } from '../utils/post';
import { URL_USER } from '../variables';

export const getUsers = async () => {
  const res: IArtists[] = await methodGet(URL_USER);
  return res;
};

export const register = async (_:null, data:IUser, context: IContext) => {
  const res: IUser = await methodPost(URL_USER, '/register', data, context.token);
  return res;
};

export const login = async (_:null, data:IUser, context: IContext) => {
  const token: string = await methodPost(URL_USER, '/login', data, context.token);
  return token;
};
