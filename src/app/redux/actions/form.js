export const submitForm = () => {
    return async (dispatch, getState) => {
      const { isSubmitting } = getState().form;
      if (!isSubmitting) {
        dispatch({ type: 'SET_SUBMITTING', payload: true });
        setTimeout(() => {
            dispatch({ type: 'SET_SUBMITTING', payload: false });
        }, 5000);
      }
    };
  };