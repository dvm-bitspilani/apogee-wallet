import request from 'request'

import * as auth from '@/constants/auth'
import * as api from '@/constants/api'
import { setProfile } from './userProfile'

export const changeLoginStatus = (isLoggedIn, JWT) => ({
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
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({
      username, password
    })
  }, (error, response, body) => {
    // dispatch(changeLoginStatus(true, ""))
    // dispatch(setProfile(testBody));
    // return;
    dispatch(setProfile(body))
    if(!response) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
    }
    else if(response.statusCode === 200) {
      try{
        body = JSON.parse(body)
        const { JWT } = body 
        dispatch(changeLoginStatus(true, JWT))
        dispatch(setProfile(body))
      }catch(e) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
      }
    }
    else {
      try{
        body = JSON.parse(body)
        dispatch(setErrorMessage(true, body.detail));
      }catch(e) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
      }
    }
  });
}

export const setErrorMessage = (isMessageSet, message) => {
  return {
    type: auth.SET_ERRORMESSAGE, 
    payload: {
      isMessageSet, message
    }
  }
}