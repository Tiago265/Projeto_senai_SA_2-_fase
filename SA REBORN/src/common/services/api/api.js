import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Certifique-se que esta é a URL do seu backend Node.js
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;