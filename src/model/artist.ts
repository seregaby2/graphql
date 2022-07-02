import { IArtists, IContext } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { methodUpdate } from '../service/update';
import { URL } from '../variables';

export const getArtists = async (_:null, data:IArtists, context: IContext) => {
  const res: IArtists[] = await methodGet(URL.URL_ARTIST, data, context.token);
  return res;
};

export const getArtist = async (_:null, data:IArtists, context: IContext) => {
  const res: IArtists = await methodGet(URL.URL_ARTIST, data, context.token);
  return res;
};

export const createArtist = async (_:null, data:IArtists, context: IContext) => {
  const res = await methodPost(URL.URL_ARTIST, '', data, context.token);
  return res;
};

export const updateArtist = async (_:null, data: IArtists, context: IContext) => {
  const res = await methodUpdate(URL.URL_ARTIST, '', data, context.token);
  return res;
};

export const deleteArtist = async (_:null, data: IArtists, context: IContext) => {
  const res = await methodDelete(URL.URL_ARTIST, '', data, context.token);
  return res;
};
