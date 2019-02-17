import * as auth from '@/constants/auth'

const initialState = {
  isLoggedIn: false,
  JWT: null,
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  console.log(type)
  if(type === auth.SET_LOGIN) {
    const {
      payload: {
        isLoggedIn, JWT
      }
    } = action
    console.log(state);
    return {
      ...state, 
      JWT,
      isLoggedIn 
    }
  }
  return {
    ...state
  }
}

export {
  reducer as auth
}