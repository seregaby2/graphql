import { IContext, IGenre } from '../interface';
import { methodDelete } from '../utils/delete';
import { methodGet } from '../utils/get';
import { methodPost } from '../utils/post';
import { methodUpdate } from '../utils/update';
import { URL } from '../variables';

export const getGenre = async () => {
  const res: IGenre[] = await methodGet(URL.URL_GENRE);
  return res;
};

export const createGenre = async (_:null, data:IGenre, context: IContext) => {
  const res = await methodPost(URL.URL_GENRE, '', data, context.token);
  return res;
};

export const updateGenre = async (_:null, data: IGenre, context: IContext) => {
  const res = await methodUpdate(URL.URL_GENRE, '', data, context.token);
  return res;
};

export const deleteGenre = async (_:null, data: IGenre, context: IContext) => {
  const res = await methodDelete(URL.URL_GENRE, '', data, context.token);
  return res;
};
