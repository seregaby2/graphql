import { IAlbum, IContext } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { methodUpdate } from '../service/update';
import { URL } from '../variables';

export const getAlbums = async (_:null, data:IAlbum, context: IContext) => {
  const res: IAlbum[] = await methodGet(URL.URL_ALBUM, data, context.token);
  return res;
};

export const getAlbum = async (_:null, data:IAlbum, context: IContext) => {
  const res: IAlbum = await methodGet(URL.URL_ALBUM, data, context.token);
  return res;
};

export const createAlbum = async (_:null, data:IAlbum, context: IContext) => {
  const res = await methodPost(URL.URL_GENRE, '', data, context.token);
  return res;
};

export const updateAlbum = async (_:null, data: IAlbum, context: IContext) => {
  const res = await methodUpdate(URL.URL_ALBUM, '', data, context.token);
  return res;
};

export const deleteAlbum = async (_:null, data: IAlbum, context: IContext) => {
  const res = await methodDelete(URL.URL_ALBUM, '', data, context.token);
  return res;
};
