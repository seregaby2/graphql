import { IContext, IFavorite, IFavouriteTrack } from '../interface';
import { methodDelete } from '../service/delete';
import { methodGet } from '../service/get';
import { methodUpdate } from '../service/update';
import { URL } from '../variables';

export const getFavourites = async (_:null, data: IFavouriteTrack, context: IContext) => {
  const res: IFavorite[] = await methodGet(URL.URL_FAVOURITE, data, context.token);
  return res;
};

export const getFavourite = async (_:null, data:IFavouriteTrack, context: IContext) => {
  const res: IFavouriteTrack = await methodGet(URL.URL_FAVOURITE, data, context.token);
  return res;
};

export const addTrackToFavourites = async (_:null, data: IFavouriteTrack, context: IContext) => {
  const res = await methodUpdate(URL.URL_FAVOURITE_ADD, '', data, context.token);
  return res;
};
export const addGenreToFavourites = async (_:null, data: IFavouriteTrack, context: IContext) => {
  const res = await methodUpdate(URL.URL_FAVOURITE_ADD, '', data, context.token);
  return res;
};
export const addArtistToFavourites = async (_:null, data: IFavouriteTrack, context: IContext) => {
  const res = await methodUpdate(URL.URL_FAVOURITE_ADD, '', data, context.token);
  return res;
};
export const addBandToFavourites = async (_:null, data: IFavouriteTrack, context: IContext) => {
  const res = await methodUpdate(URL.URL_FAVOURITE_ADD, '', data, context.token);
  return res;
};

export const deleteBandFromFavourites = async (_:null, data: IFavorite, context: IContext) => {
  const res = await methodDelete(URL.URL_FAVOURITE_DELETE, '', data, context.token);
  return res;
};

export const deleteArtistFromFavourites = async (_:null, data: IFavorite, context: IContext) => {
  const res = await methodDelete(URL.URL_FAVOURITE_DELETE, '', data, context.token);
  return res;
};
export const deleteGenreFromFavourites = async (_:null, data: IFavorite, context: IContext) => {
  const res = await methodDelete(URL.URL_FAVOURITE_DELETE, '', data, context.token);
  return res;
};
export const deleteTrackFromFavourites = async (_:null, data: IFavorite, context: IContext) => {
  const res = await methodDelete(URL.URL_FAVOURITE_DELETE, '', data, context.token);
  return res;
};
