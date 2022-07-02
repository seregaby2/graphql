import fetch from 'node-fetch';

export const methodGet = async (url: string) => {
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await data.json();
  console.log(response, 'get', url);
  return response.items;
};
