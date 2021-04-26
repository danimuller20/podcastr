import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://podcastr-nlw-api.herokuapp.com/',
})