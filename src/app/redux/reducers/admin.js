export const adminReducer = (
  state = { users: [], requests: [], pagination: {} ,works:[]},
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
    case "INIT_WORKS":
      return {
        ...state,
        works: [...action.payload.data],
        pagination: { ...action.payload.paginationdata },
      };
    case "INIT_PAY":
      return {
        ...state,
        pays: [...action.payload.data],
        pagination: { ...action.payload.paginationdata },
      };
    default:
      return state;
  }
};
