import axios, { AxiosDefaults, AxiosInstance } from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.19:3333',
});

export default api;
