const initialState = {
    isSubmitting: false,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SUBMITTING':
        return {
          ...state,
          isSubmitting: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;