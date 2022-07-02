import { IContext, ITrack } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { methodUpdate } from '../service/update';
import { URL } from '../variables';

export const getTrack = async () => {
  const res: ITrack[] = await methodGet(URL.URL_TRACK);
  return res;
};

export const createTrack = async (_:null, data:ITrack, context: IContext) => {
  const res = await methodPost(URL.URL_TRACK, '', data, context.token);
  return res;
};

export const updateTrack = async (_:null, data: ITrack, context: IContext) => {
  const res = await methodUpdate(URL.URL_TRACK, '', data, context.token);
  return res;
};

export const deleteTrack = async (_:null, data: ITrack, context: IContext) => {
  const res = await methodDelete(URL.URL_TRACK, '', data, context.token);
  return res;
};
