import { AllUsersService, RequestsService } from "../../services/adminService";

export const getAllUser = (page) => {
  return async (dispatch, getState) => {
    try {
      const token= localStorage.getItem("access_token")
      const {data} = await AllUsersService(token,page);
      console.log("data",data);
      await dispatch({ type: "INIT_USERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_USERS", payload: {...getState().admin} });
    }
  };
};
export const getAllRequsets = (page) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await RequestsService(page);
      await dispatch({ type: "INIT_REQUESTS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_REQUESTS", payload: {...getState().admin} });
    }
  };
};
