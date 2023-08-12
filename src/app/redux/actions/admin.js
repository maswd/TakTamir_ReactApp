import { AllTechncianService, AllUsersService, RequestsService, WorksService } from "../../services/adminService";

export const getAllTechncian = (page) => {
  return async (dispatch, getState) => {
    try {
      const token= localStorage.getItem("access_token")
      const {data} = await AllTechncianService(token,page);
      await dispatch({ type: "INIT_USERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_USERS", payload: {...getState().admin} });
    }
  };
};
export const getAllUser = (page) => {
  return async (dispatch, getState) => {
    try {
      const token= localStorage.getItem("access_token")
      const {data} = await AllUsersService(token,page);
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
export const getAllWorks = (page) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await WorksService(page);
      await dispatch({ type: "INIT_WORKS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_WORKS", payload: {...getState().admin} });
    }
  };
};
