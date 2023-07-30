import axios from "axios";
import config from './config.json'
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("refresh_token");
      const res = await axios.post(`${config.api}/api/AuthUsers/refresh-token/${refresh_token}`);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access);
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
