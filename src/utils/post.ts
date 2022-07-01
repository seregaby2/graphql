import fetch from 'node-fetch';

export const methodPost = async (url: string, path:string, data:any, token: string) => {
  const res = await fetch(`${url}${path}`, {
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await res.json();
  console.log(data, 'id');
  return response;
};
