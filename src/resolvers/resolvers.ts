/* eslint-disable no-underscore-dangle */
import { IBand, IContext, IUser } from '../interface';
import { methodDelete } from '../utils/delete';
import { methodGet } from '../utils/get';
import { methodPost } from '../utils/post';
import { methodUpdate } from '../utils/update';
import { URL_BAND, URL_USER } from '../variables';

const getBand = async () => {
  const res: IBand[] = await methodGet(URL_BAND);
  return res;
};

const createBand = async (_:null, data:any, context: IContext) => {
  const res = await methodPost(URL_BAND, '', data, context.token);
  return res;
};

const updateBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodUpdate(URL_BAND, '', data, context.token);
  return res;
};

const deleteBand = async (_:null, data: IBand, context: IContext) => {
  const res = await methodDelete(URL_BAND, '', data, context.token);
  return res;
};

const register = async (_:null, data:any, context: IContext) => {
  const res: IUser = await methodPost(URL_USER, '/register', data, context.token);
  return res;
};

const login = async (_:null, data:any, context: IContext) => {
  const token: string = await methodPost(URL_USER, '/login', data, context.token);
  return token;
};

export const resolvers = {
  Query: {
    getBand,
  },
  Band: {
    id: (parent: { _id: string; }) => parent._id,
  },
  Mutation: {
    register,
    login,
    createBand,
    updateBand,
    deleteBand,
  },
};
