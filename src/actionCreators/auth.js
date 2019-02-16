import * as auth from '@/constants/auth'

const setJwt = jwt => ({
  type: auth.SET_JWT,
  payload: {
    jwt: "Hello"
  }
})

export default {
  setJwt
}