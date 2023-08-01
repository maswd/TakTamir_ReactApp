import { http } from "./httpService";
import config from './config.json'
export const jobsService = () => {
	return http.get(`${config.api}/api/Jobs`);
}
