const initialState = {
  isLoggedIn: true
}

const reducer = (state = initialState, action) => {
  if(action.type === "TEST") {
    return {
      isLoggedIn: !state.isLoggedIn
    }
  }
  return {
    ...state
  }
}

export {
  reducer as auth
}