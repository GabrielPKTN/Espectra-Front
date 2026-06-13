import axios from 'axios';

const api = axios.create({
  // Substitua pela URL da sua API local ou em produção
  baseURL: 'https://minha-api-unica.azurewebsites.net', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
