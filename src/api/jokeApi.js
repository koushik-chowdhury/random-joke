import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/public',
});

export const fetchRandomJoke = async () => {
  const res = await API.get('/randomjokes/joke/random');

  console.log(res.data);

  return res.data.data;
};
