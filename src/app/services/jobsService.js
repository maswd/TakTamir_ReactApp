import { http } from "./httpService";
import config from "/src/config.json";
export const jobsService = (page) => {
  return http.get(
    `${config.api}/api/Jobs?page=${page}&pageSize=6`
  );
};
export const orderService = (page) => {
  return http.get(`${config.api}/api/Users/MyJobs?page=${page}&pageSize=6`);
};
export const reservationService = (id) => {
  return http.get(`${config.api}/api/Users/Book_a_job?IdJob=${id}`);
};
export const changeStatusService = (id, status) => {
  return http.post(
    `${config.api}/api/Users/Change_of_work_status?orderid=${id}`,
    status
  );
};
export const endJobService = (id, data) => {
  return http.post(
    `${config.api}/api/Users/End_of_the_work?orderid=${id}`,
    data
  );
};
