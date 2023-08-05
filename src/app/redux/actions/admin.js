import { AllUsersService, RequestsService } from "../../services/adminService";

export const getAllUser = () => {
  return async (dispatch, getState) => {
    try {
      const token= localStorage.getItem("access_token")
      const {data} = await AllUsersService(token);
      console.log("data",data);
      await dispatch({ type: "INIT_USERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_USERS", payload: {...getState().admin} });
    }
  };
};
export const getAllRequsets = () => {
  return async (dispatch, getState) => {
    try {
      const {data:req} = await RequestsService();
      console.log("req",req);
      await dispatch({ type: "INIT_REQUESTS", payload: req });
    } catch (error) {
      dispatch({ type: "INIT_REQUESTS", payload: {...getState().admin} });
    }
  };
};
