import axios from 'axios';

const apiKey = process.env.API_KEY;
const apiHost = 'online-movie-database.p.rapidapi.com';
const baseURL = 'https://online-movie-database.p.rapidapi.com';
const headers = {
  // 'Content-Type': 'application/json',
  'x-rapidapi-key': apiKey,
  'x-rapidapi-host': apiHost,
};

// const urlAutoComplete = '/auto-complete';

// export const options = {
//   method: 'GET',
//   url: baseURL + urlAutoComplete,
//   headers,
//   params: { q: 'game of thr' }, //test
// };

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;

