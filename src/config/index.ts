import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Base URL for API requests
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json', 
    },
  });