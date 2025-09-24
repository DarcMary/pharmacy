import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Adiciona o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@FarmaSaude:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('@FarmaSaude:user');
      localStorage.removeItem('@FarmaSaude:token');
    }
    return Promise.reject(error);
  }
);

export default api;