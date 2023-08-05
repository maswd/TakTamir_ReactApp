export const adminReducer = (state = { users: [], requests: [] }, action) => {
  switch (action.type) {
    case "INIT_USERS":
      return {
        ...state,
        users: [...action.payload],
      };
    case "INIT_REQUESTS":
      return {
        ...state,
        requests: [...action.payload],
      };
    default:
      return state;
  }
};
