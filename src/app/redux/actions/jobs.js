import { jobsService } from "../../services/jobsService";

export const getAllJobs = () => {
    return async (dispatch, getState) => {
        try {
            const {data} = await jobsService();
            console.log(data);
            await dispatch({ type: "INIT_JOBS", payload: data })
        } catch (error) {
            dispatch({ type: "INIT_JOBS", payload: [...getState().jobs] });
        }
    }
}