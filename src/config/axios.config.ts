import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//  Request Interceptor → attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // attach token
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Optional: Response Interceptor → handle unauthorized globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // token expired / invalid
      localStorage.removeItem("token");
      // later you can dispatch logout from redux here if you want
    }
    return Promise.reject(error);
  }
);
