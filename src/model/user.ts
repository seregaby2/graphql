import { IArtists, IContext, IUser } from '../interface';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { URL } from '../variables';

export const getUsers = async () => {
  const res: IArtists[] = await methodGet(URL.URL_USER);
  return res;
};

export const register = async (_:null, data:IUser, context: IContext) => {
  const res: IUser = await methodPost(URL.URL_USER, '/register', data, context.token);
  return res;
};

export const login = async (_:null, data:IUser, context: IContext) => {
  const token: string = await methodPost(URL.URL_USER, '/login', data, context.token);
  return token;
};
