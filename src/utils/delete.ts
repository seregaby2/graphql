import fetch from 'node-fetch';
import {
  IArtists, IBand, IGenre, IUser,
} from '../interface';

export const methodDelete = async (
  url: string,
  path: string,
  data: IBand | IArtists | IUser | IGenre,
  token: string,
) => {
  const res = await fetch(`${url}${path}/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await res.json();
  return response;
};
