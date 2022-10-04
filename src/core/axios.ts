import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org',
  headers: {
    'Access-Control-Allow-Origin': `*`,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
  },
  params: {
    appid: process.env.REACT_APP_API_KEY,
    lang: 'ru',
    units: 'metric'
  }
});

window.axios = axiosConfig;

export default axiosConfig;
