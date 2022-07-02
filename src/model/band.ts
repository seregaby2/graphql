import { IBand, IContext } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodPost } from '../service/post';
import { methodUpdate } from '../service/update';
import { URL } from '../variables';

export const getBands = async () => {
  const res: IBand[] = await methodGet(URL.URL_BAND);
  return res;
};

export const createBand = async (_:null, data:IBand, context: IContext) => {
  const res = await methodPost(URL.URL_BAND, '', data, context.token);
  return res;
};

export const updateBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodUpdate(URL.URL_BAND, '', data, context.token);
  return res;
};

export const deleteBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodDelete(URL.URL_BAND, '', data, context.token);
  return res;
};
