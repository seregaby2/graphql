import { IBand, IContext } from '../interface';
import { methodDelete } from '../utils/delete';
import { methodGet } from '../utils/get';
import { methodPost } from '../utils/post';
import { methodUpdate } from '../utils/update';
import { URL_BAND } from '../variables';

export const getBand = async () => {
  const res: IBand[] = await methodGet(URL_BAND);
  return res;
};

export const createBand = async (_:null, data:IBand, context: IContext) => {
  const res = await methodPost(URL_BAND, '', data, context.token);
  return res;
};

export const updateBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodUpdate(URL_BAND, '', data, context.token);
  return res;
};

export const deleteBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodDelete(URL_BAND, '', data, context.token);
  return res;
};
