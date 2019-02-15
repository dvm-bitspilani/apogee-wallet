export const changeAuthStatus = () => (dispatch, getState) => setTimeout(() => {
  console.log(getState())
  dispatch({type: "TEST"})
  return {
    type: "TEST"
  }
}, 1000);
