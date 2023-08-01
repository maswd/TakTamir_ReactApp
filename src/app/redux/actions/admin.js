import { AllUsersService } from "../../services/adminService";

export const getAllUser = () => {
  return async (dispatch, getState) => {
    try {
      const token= localStorage.getItem("access_token")
      const res = await AllUsersService(token);
      console.log(res);
      // await dispatch({ type: "INIT_USERS", payload: data });
    } catch (error) {
      dispatch({ type: "INIT_USERS", payload: [...getState().admin] });
    }
  };
};
