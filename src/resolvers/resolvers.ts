/* eslint-disable no-underscore-dangle */
import {
  createArtist, deleteArtist, getArtists, updateArtist,
} from '../model/artist';
import {
  createBand, deleteBand, getBands, updateBand,
} from '../model/band';
import { getUsers, login, register } from '../model/user';

export const resolvers = {
  Query: {
    getBands,
    getArtists,
    getUsers,
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
