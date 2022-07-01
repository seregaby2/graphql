import fetch from 'node-fetch';
import { IBand } from '../interface';

export const methodDelete = async (
  url: string,
  path: string,
  data: IBand,
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
  console.log(response, 'delete', data);
  return response;
};
