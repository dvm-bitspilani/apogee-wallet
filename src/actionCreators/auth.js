import request from 'request'

import * as auth from '@/constants/auth'
import * as api from '@/constants/api'
import { setProfile } from './userProfile'

const changeLoginStatus = (isLoggedIn, JWT) => ({
  type: auth.SET_LOGIN,
  payload: {
    JWT, isLoggedIn
  }
})

export const login = (username, password) => dispatch => {
  request({
    method: 'POST',
    url: api.OUTSTATION_LOGIN,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN
    },
    body: JSON.stringify({
      username, password
    })
  }, (error, response, body) => {
    body = JSON.parse(body)
    const { JWT } = body 
    if(response.statusCode === 200) {
      dispatch(changeLoginStatus(true, JWT))
      dispatch(setProfile(body))
    }
  });
}