// import fetch from 'node-fetch';
import { IBand } from '../interface';
import { methodGet } from '../utils/get';
import { URL_BAND } from '../variables';

const response = async () => {
  const res: IBand[] = await methodGet(URL_BAND);
  return res;
};

export const resolvers = {
  Query: {
    getBand: response,
  },
};
