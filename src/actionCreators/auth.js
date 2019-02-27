import request from 'request'

import * as auth from '@/constants/auth'
import * as api from '@/constants/api'
import { setProfile, updateBalance } from './userProfile'
import firebase from 'firebase/app'
import { provider } from '@/firebaseConfig'
import { setupRealtimeBalance } from '@/firebaseDatabase'

export const changeLoginStatus = (isLoggedIn, JWT) => ({
  type: auth.SET_LOGIN,
  payload: {
    JWT, isLoggedIn
  }
})

export const login = (username, password) => (dispatch, getState) => {
  request({
    method: 'POST',
    url: api.LOGIN,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      username, password
    })
  }, (error, response, body) => {
    dispatch(setProfile(body))
    if (!response) {
      dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
    }
    else if (response.statusCode === 200) {
      try {
        body = JSON.parse(body)
        const { JWT } = body
        dispatch(changeLoginStatus(true, JWT))
        dispatch(setProfile({
          ...body,
          isBitsian: body.bitsian_id.trim().length > 0
        }))
        setupRealtimeBalance(getState().userProfile.isBitsian, getState().userProfile.userId, dispatch);

      } catch (e) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
      }
    }
    else {
      try {
        body = JSON.parse(body)
        dispatch(setErrorMessage(true, body.detail));
      } catch (e) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
      }
    }
  });
}

export const getIdToken = () => (dispatch, getState) => {
  firebase.auth().signInWithRedirect(provider)
}

export const googleLogin = id => (dispatch, getState) => {
  console.log(id)
  request({
    method: 'POST',
    url: api.LOGIN,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      id_token: id
    })
  }, (error, response, body) => {
    console.log('herer')
    dispatch(setProfile(body))
    console.log(JSON.parse(body))
    if (!response) {
      dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
    }
    else if (response.statusCode === 200) {
      try {
        body = JSON.parse(body)
        const { JWT } = body
        dispatch(changeLoginStatus(true, JWT))
        dispatch(setProfile({
          ...body,
          isBitsian: body.bitsian_id.trim().length > 0
        }))
        setupRealtimeBalance(getState().userProfile.isBitsian, getState().userProfile.userId);
      } catch (e) {
        dispatch(setErrorMessage(true, "Unknown error, please contact adminstrators"));
      }
    }
    else {
      try {
        body = JSON.parse(body)
        dispatch(setErrorMessage(true, body.detail));
      } catch (e) {
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

/*const setupRealtimeBalance = (isBitsian, id, dispatch) => {
  const pre = isBitsian ? 'bitsian' : 'participant'
  const userPath = `users/${pre} - ${id}`;
  const database = firebase.database();

  const balancePath = `${userPath}/total_balance`
  const balanceRef = database.ref(balancePath)
  balanceRef.on('value', snap => {
    const balance = snap.val()
    console.log(balance)
    dispatch(updateBalance(balance));
  })
}*/