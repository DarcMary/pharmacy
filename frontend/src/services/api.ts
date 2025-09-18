import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('@Pharmacy:user');
      localStorage.removeItem('@Pharmacy:token');
    }
    return Promise.reject(error);
  }
);

export default api;