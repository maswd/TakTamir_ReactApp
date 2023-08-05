export const jobReducer = (state = { jobs: [], orders: [] }, action) => {
  switch (action.type) {
    case "INIT_JOBS":
      return {
        ...state,
        jobs: [...action.payload],
      };
    case "INIT_ORDERS":
      return {
        ...state,
        orders: [...action.payload],
      };
    default:
      return state;
  }
};
