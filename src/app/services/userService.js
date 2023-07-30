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
export const getUsers = () => {
  return http.get(`${config.api}/v1users`);
};
export const registerUser = (user) => {
  return http.post(`${config.api}/api/Users/Update_user`, user);
};
export const updateUserProfile = (picture) => {
  return http.put(`${config.api}/v1user/picture`, picture);
};
export const ChangeUserRole = (userId, role) => {
  return http.put(`${config.api}/v1users/role/${userId}`, role);
};
export const profilePicture = (file) => {
  return http.put(`${config.api}/v1user/picture`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const DeleteProfilePicture = () => {
  return http.delete(`${config.api}/v1users/profilepicture`);
};
export const getUserDetails = (id) => {
  return http.get(`${config.api}/v1user/${id}`);
};
export const getProfile = (token) => {
  return http.get(`${config.api}/api/Users/user`, {
    headers: {
      "Authorization":`Bearer ${token}`
    }
  });
};
export const getProfilePicture = (id) => {
  return http.get(`${config.api}/v1file/${id}`);
};
