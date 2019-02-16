import * as auth from '@/constants/auth'

export const setJwt = jwt => ({
  type: auth.SET_JWT,
  payload: {
    jwt: "Hello"
  }
})