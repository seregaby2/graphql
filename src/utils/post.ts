import fetch from 'node-fetch';
import { IArtists, IBand } from '../interface';

export const methodPost = async (
  url: string,
  path:string,
  data:IBand | IArtists,
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
  return response;
};
