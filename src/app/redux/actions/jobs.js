import { jobsService, orderService } from "../../services/jobsService";

export const getAllJobs = () => {
  return async (dispatch, getState) => {
    try {
      const { data:jobs } = await jobsService();
      console.log(jobs);
      await dispatch({ type: "INIT_JOBS", payload: jobs });
    } catch (error) {
      dispatch({ type: "INIT_JOBS", payload: { ...getState().jobs } });
    }
  };
};
export const getAllOrders = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await orderService();
      console.log(data);
      await dispatch({ type: "INIT_ORDERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_ORDERS", payload: { ...getState().jobs } });
    }
  };
};
