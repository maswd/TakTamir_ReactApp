import { http } from "./httpService";
import config from "./config.json";

export const AllUsersService = (token, page) => {
  return http.get(
    `${config.api}/api/AdminUsers/Unverified_users?page=${page}&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const RequestsService = (page) => {
  return http.post(
    `${config.api}/api/AdminUsers/Work_pending_approval?page=${page}&pageSize=10`
  );
};

export const VerifyAccountUserService = (id) => {
  return http.post(
    `${config.api}/api/AdminUsers/VerifyAccountUser?userid=${id}  `
  );
};
export const RejectAccountUserService = (id) => {
  return http.post(
    `${config.api}/api/AdminUsers/RejectAccountUser?Userid=${id}`
  );
};
