import * as auth from '@/constants/auth'

const initialState = {
  isLoggedIn: false,
  jwt: null,
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === auth.SET_JWT) {
    console.log("JWT to be set");
    return {
      ...state, 
      jwt: action.payload.jwt
    }
  }
  return {
    ...state
  }
}

export {
  reducer as auth
}