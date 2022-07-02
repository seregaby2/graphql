import fetch from 'node-fetch';
import {
  IAlbum,
  IArtists, IBand, IGenre, IUser,
} from '../interface';

export const methodPost = async (
  url: string,
  path:string,
  data:IBand | IArtists | IUser | IGenre | IAlbum,
  token: string,
) => {
  const res = await fetch(`${url}${path}`, {
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await res.json();
  console.log(response);
  return response;
};
