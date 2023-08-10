export const adminReducer = (
  state = { users: [], requests: [], pagination: {} },
  action
) => {
  switch (action.type) {
    case "INIT_USERS":
      return {
        ...state,
        users: [...action.payload.users],
        pagination: { ...action.payload.paginationData },
      };
    case "INIT_REQUESTS":
      return {
        ...state,
        requests: [...action.payload.data],
        pagination: { ...action.payload.paginationData },
      };
    default:
      return state;
  }
};
