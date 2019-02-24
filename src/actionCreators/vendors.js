import request from 'request'

import * as vendors from '@/constants/vendors'
import * as api from '@/constants/api'

export const setCurrentVendor = ({name, id}) => ({
  type: vendors.SET_CURR_VENDOR,
  name,
  id
});

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
    try {
      body = JSON.parse(body);
      dispatch(setVendors(body))
    }catch(e) {

    }
  });
}

export const getVendor = id => (dispatch, getState) => {
  dispatch(setCurrentVendor({name: "", id: ""}));
  request({
    method: 'GET',
    url: api.GET_VENDORS + id,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }}, function (error, response, body) {
      body = JSON.parse(body);
      let { name, id } = body;
      dispatch(setCurrentVendor({name, id}));
  });
}

export const setItems = payload => ({
  type: vendors.SET_ITEMS,
  payload
})

export const getItems = id => (dispatch, getState) => {
  dispatch(setItems([]));
  dispatch(getVendor(id));
  request({
    method: 'GET',
    url: `${api.GET_VENDORS}${id}/items`,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }},
    function (error, response, body) {
      body = JSON.parse(body);
      dispatch(setItems(body));
    }
  );
}