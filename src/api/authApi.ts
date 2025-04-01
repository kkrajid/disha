import axios from 'axios';


// const API_URL = 'http://localhost:8000'; // Update with your backend URL
// const API_URL = 'http://13.49.226.189';
const API_URL = 'https://disha-backend.onrender.com/';

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authorization header
authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('No refresh token');

        const response = await axios.post(`${API_URL}/token/refresh/`, {
          refresh: refreshToken,
        });
        
        const { access } = response.data;
        localStorage.setItem('access_token', access);
        originalRequest.headers.Authorization = `Bearer ${access}`;
        
        return authApi(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (phone_number: string, password: string) => {
  const response = await authApi.post('/login/', { phone_number, password });
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
  return response.data;
};

export const register = async (data: {
  phone_number: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const response = await authApi.post('/register/', data);
  return response.data;
};

export const requestPasswordReset = async (phone_number: string) => {
  const response = await authApi.post('/request-password-reset/', { phone_number });
  return response.data;
};

export const verifyOTP = async (phone_number: string, otp: string) => {
  const response = await authApi.post('/verify-otp/', { phone_number, otp });
  return response.data;
};

export const resetPassword = async (phone_number: string, new_password: string) => {
  const response = await authApi.post('/reset-password/', { phone_number, new_password });
  return response.data;
};

export const logout = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (refreshToken) {
    await authApi.post('/logout/', { refresh: refreshToken });
  }
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

// src/components/ProtectedRoute.tsx
