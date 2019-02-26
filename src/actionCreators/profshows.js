import request from 'request'

import * as api from '@/constants/api'

export const SET_ALL_PROFSHOWS = () => ({})

export const getAllProfshows = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_ALL_PROFSHOWS,
    headers: {
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Authorization': `JWT ${getState().auth.JWT}` 
    }
  }, function (error, response, body) {
    console.log('here')
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  });
}