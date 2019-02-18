import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import * as api from './constants/api'


let x;
const initStore = (x = localStorage.getItem(api.LOCALSTORAGE_LOGIN)) ? JSON.parse(x) : {}
const store = createStore(combineReducers(reducers), initStore, applyMiddleware(thunk))

store.subscribe(() => {
  const state = store.getState();
  let { auth, userProfile } = state;
  if(!auth.isLoggedIn) {
    localStorage.removeItem(api.LOCALSTORAGE_LOGIN);
  }
  auth = { ...auth, isMessageSet: false, message: ""}
  const localStorageItem = {
    auth, userProfile
  }
  localStorage.setItem(api.LOCALSTORAGE_LOGIN, JSON.stringify(localStorageItem));
});

export default store