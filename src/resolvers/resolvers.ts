/* eslint-disable no-underscore-dangle */
import {
  createArtist, deleteArtist, getArtists, updateArtist,
} from '../model/artist';
import {
  createBand, deleteBand, getBands, updateBand,
} from '../model/band';
import {
  createGenre, deleteGenre, getGenre, updateGenre,
} from '../model/genre';
import { getUsers, login, register } from '../model/user';

export const resolvers = {
  Query: {
    getBands,
    getArtists,
    getUsers,
    getGenre,
  },
  Band: {
    id: (parent: { _id: string; }) => parent._id,
  },
  Artist: {
    id: (parent: { _id: string; }) => parent._id,
  },
  User: {
    id: (parent: { _id: string; }) => parent._id,
  },
  Genre: {
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
    createGenre,
    updateGenre,
    deleteGenre,
  },
};
