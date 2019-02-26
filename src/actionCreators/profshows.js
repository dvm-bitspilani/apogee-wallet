import request from 'request'

import * as profshows from '@/constants/profshows'
import * as api from '@/constants/api'

export const setAllProfshows = (showsData) => ({
  type: profshows.SET_ALL_PROFSHOWS,
  payload: showsData
});

export const getAllProfshows = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_ALL_PROFSHOWS,
    headers: {
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Authorization': `JWT ${getState().auth.JWT}` 
    }
  }, function (error, response, body) {
    let profshowsData = JSON.parse(body);
    dispatch(setAllProfshows(profshowsData));
  });
}