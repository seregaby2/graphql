import fetch from 'node-fetch';
import {
  IAlbum,
  IArtists, IBand, IFavorite, IGenre, ITrack, IUser,
} from '../interface';

export const methodGet = async (
  url: string,
  data: IBand | IArtists | IUser | IGenre | IAlbum | ITrack | IFavorite,
  token: string,
) => {
  const res = await fetch(`${url}/${data.id ? data.id : ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
  });

  const response = await res.json();
  return data.id ? response : response.items;
};
