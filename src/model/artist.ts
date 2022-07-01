import { IArtists, IContext } from '../interface';
import { methodDelete } from '../utils/delete';
import { methodGet } from '../utils/get';
import { methodPost } from '../utils/post';
import { methodUpdate } from '../utils/update';
import { URL_ARTIST } from '../variables';

export const getArtists = async () => {
  const res: IArtists[] = await methodGet(URL_ARTIST);
  return res;
};

export const createArtist = async (_:null, data:IArtists, context: IContext) => {
  const res = await methodPost(URL_ARTIST, '', data, context.token);
  return res;
};

export const updateArtist = async (_:null, data: IArtists, context: IContext) => {
  const res = await methodUpdate(URL_ARTIST, '', data, context.token);
  return res;
};

export const deleteArtist = async (_:null, data: IArtists, context: IContext) => {
  const res = await methodDelete(URL_ARTIST, '', data, context.token);
  return res;
};
