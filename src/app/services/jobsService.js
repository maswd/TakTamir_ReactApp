import { http } from "./httpService";
import config from './config.json'
export const jobsService = () => {
	return http.get(`${config.api}/api/Jobs`);
}
export const orderService = () => {
	return http.get(`${config.api}/api/Users/MyJobs`);
}
export const reservationService = (id) => {
	return http.get(`${config.api}/api/Users/Book_a_job?IdJob=${id}`);
}
export const changeStatusService = (id,status) => {
	return http.post(`${config.api}/api/Users/Change_of_work_status?orderid=${id}`,status);
}
