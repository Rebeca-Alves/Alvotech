import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://127.0.0.1:5000/sidi_ponto/v1/', 
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json', 
    },
  });