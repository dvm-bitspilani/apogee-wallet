import request from 'request'

import * as vendors from '@/constants/vendors'
import * as api from '@/constants/api'

export const setVendors = payload => ({
  type: vendors.SET_VENDORS,
  payload
})

export const getVendors = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_VENDORS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }}, (error, response, body) => {
    // console.log('Status:', response.statusCode);
    // console.log('Headers:', JSON.stringify(response.headers));
    // console.log('Response:', body);
    try {
      body = JSON.parse(body);
      console.log("Fetched data")
      console.log(setVendors(body))
      console.log(getState());
      dispatch(setVendors(body))
    }catch(e) {

    }
  });
}

export const getVendor = id => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_VENDORS + id,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }}, function (error, response, body) {
    console.log('Status:', response);
    // console.log('Headers:', JSON.stringify(response.headers));
    // console.log('Response:', body);
  });
}