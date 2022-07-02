import { IContext, IGenre } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { methodUpdate } from '../service/update';
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
