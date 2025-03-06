
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:8000',
});

// Add request interceptor to inject token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;