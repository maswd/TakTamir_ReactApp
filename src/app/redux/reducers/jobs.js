export const jobReducer = (
  state = { jobs: [], orders: [], pagination: {} },
  action
) => {
  switch (action.type) {
    case "INIT_JOBS":
      return {
        ...state,
        jobs: [...action.payload.jobs],
        pagination: { ...action.payload.paginationData },
      };
    case "INIT_ORDERS":
      return {
        ...state,
        orders: [...action.payload.orders],
        pagination: { ...action.payload.paginationData },
      };
    default:
      return state;
  }
};
