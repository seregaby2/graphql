/* eslint-disable no-underscore-dangle */
import { IContext, IUser } from '../interface';
import {
  createArtist, deleteArtist, getArtist, updateArtist,
} from '../model/artist';
import {
  createBand, deleteBand, getBand, updateBand,
} from '../model/band';

import { methodPost } from '../utils/post';

import { URL_USER } from '../variables';

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
    getArtist,
  },
  Band: {
    id: (parent: { _id: string; }) => parent._id,
  },
  Artist: {
    id: (parent: { _id: string; }) => parent._id,
  },
  Mutation: {
    register,
    login,
    createBand,
    updateBand,
    deleteBand,
    createArtist,
    updateArtist,
    deleteArtist,
  },
};
