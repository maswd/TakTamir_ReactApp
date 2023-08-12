import axios from "axios";
import config from "./config.json";
import Swal from "sweetalert2";

axios.defaults.headers.common["content-type"] = "application/json";

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
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const result = await Swal.fire({
      //   title: "هشدار!",
      //   text: "زمان دسترسی شما به پنل تمام شده .        ",
      //   icon: "error",
      //   confirmButtonText: "بروزرسانی ",
      // });
      // console.log(result);
      // if (result.isConfirmed) {
      const refreshToken = localStorage.getItem("refresh_token");
      const encodedRefreshToken = encodeURIComponent(refreshToken);
      const res = await axios.post(
        `https://taktamir.mohamadrezakiani.ir/api/AuthUsers/refresh-token?refreshToken=${encodedRefreshToken}`
      );
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_Token);
        // }  
      } else {
        return Promise.reject(error);
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
