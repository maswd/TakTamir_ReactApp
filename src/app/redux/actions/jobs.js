import { jobsService, orderService } from "../../services/jobsService";

export const getAllJobs = (page) => {
  return async (dispatch, getState) => {
    try {
      const {data:jobs} = await jobsService(page);
      await dispatch({ type: "INIT_JOBS", payload: jobs });
    } catch (error) {
      dispatch({ type: "INIT_JOBS", payload: { ...getState().jobs } });
    }
  };
};
export const getAllOrders = (page) => {
  return async (dispatch, getState) => {
    try {
      const {data}= await orderService(page);
      await dispatch({ type: "INIT_ORDERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_ORDERS", payload: { ...getState().jobs } });
    }
  };
};
