/* eslint-disable no-underscore-dangle */
import fetch from 'node-fetch';
import {
  IAlbum,
  IArtists, IBand, IGenre, IUser,
} from '../interface';

export const methodUpdate = async (
  url: string,
  path: string,
  data: IBand | IArtists | IUser | IGenre | IAlbum,
  token: string,
) => {
  const res = await fetch(`${url}${path}/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await res.json();
  return response;
};
