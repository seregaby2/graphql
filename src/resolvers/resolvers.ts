/* eslint-disable no-underscore-dangle */
import { IId } from '../interface';
import {
  createAlbum, deleteAlbum, getAlbum, getAlbums, updateAlbum,
} from '../model/album';
import {
  createArtist, deleteArtist, getArtist, getArtists, updateArtist,
} from '../model/artist';
import {
  createBand, deleteBand, getBand, getBands, updateBand,
} from '../model/band';
import {
  addArtistToFavourites,
  addBandToFavourites,
  addGenreToFavourites,
  addTrackToFavourites,
  deleteArtistFromFavourites,
  deleteBandFromFavourites,
  deleteGenreFromFavourites,
  deleteTrackFromFavourites,
  getFavourite,
  getFavourites,
} from '../model/favourite';
import {
  createGenre, deleteGenre, getGenre, getGenres, updateGenre,
} from '../model/genre';
import {
  createTrack, deleteTrack, getTrack, getTracks, updateTrack,
} from '../model/track';
import { getUsers, login, register } from '../model/user';

export const resolvers = {
  Query: {
    getBands,
    getArtists,
    getUsers,
    getGenres,
    getAlbums,
    getTracks,
    getFavourites,
    getBand,
    getAlbum,
    getArtist,
    getFavourite,
    getGenre,
    getTrack,
  },
  Band: {
    id: (parent: IId) => parent._id,
  },
  Artist: {
    id: (parent: IId) => parent._id,
  },
  User: {
    id: (parent: IId) => parent._id,
  },
  Genre: {
    id: (parent: IId) => parent._id,
  },
  Album: {
    id: (parent: IId) => parent._id,
  },
  Track: {
    id: (parent: IId) => parent._id,
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
    createAlbum,
    updateAlbum,
    deleteAlbum,
    createTrack,
    updateTrack,
    deleteTrack,
    addTrackToFavourites,
    addBandToFavourites,
    addGenreToFavourites,
    addArtistToFavourites,
    deleteBandFromFavourites,
    deleteGenreFromFavourites,
    deleteTrackFromFavourites,
    deleteArtistFromFavourites,
  },
};
