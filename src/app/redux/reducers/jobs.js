export const jobReducer = (state = [], action) => {
    switch (action.type) {
      case "INIT_JOBS":
        return [...action.payload ] 
      default:
        return state;
    }
  };
  