import { http } from "./httpService";
import config from "./config.json";

export const AllUsersService = (token) => {
  return http.get(`${config.api}/api/AdminUsers/AllUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
