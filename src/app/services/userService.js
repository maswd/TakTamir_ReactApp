import { http } from "./httpService";
import config from "./config.json";
export const checkPhone = (phone) => {
  return http.get(
    `${config.api}/api/AuthUsers/signup_phone_number?phone_number=${phone}`
  );
};
export const sendCode = (phone) => {
  return http.post(`${config.api}/api/AuthUsers`, phone);
};
export const verifyCode = (code) => {
  return http.post(`${config.api}/api/AuthUsers`, code);
};

export const registerUser = (user) => {
  return http.post(`${config.api}/api/Users/Update_user`, user);
};
export const getProfile = (token) => {
  return http.get(`${config.api}/api/Users/user`, {
    headers: {
      "Authorization":`Bearer ${token}`
    }
  });
};

