import * as profshows from '@/constants/profshows'
import { stat } from 'fs';
const initialState = {
  allProfshowsData: {},
  showsCart: {
    individual: {},
    combos: {}
  }
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === profshows.SET_ALL_PROFSHOWS) {
    const { payload } = action
    return {
      ...state,
      allProfshowsData: payload
    }
  }
  else if (type === profshows.INC_COMBO_QTY) {
    let newState;
    let id = action.id;
    if (state.showsCart.combos[id]) {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          combos: {
            ...state.showsCart.combos,
            [id]: state.showsCart.combos[id] + 1
          }
        }
      }
    }
    else {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          combos: {
            ...state.showsCart.combos,
            [id]: 1
          }
        }
      }
    }

    return newState;
  }
  else if (type === profshows.DEC_COMBO_QTY) {
    let newState = {...state}, id = action.id;
    if (state.showsCart.combos[id] && state.showsCart.combos[id] > 0) {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          combos: {
            ...state.showsCart.combos,
            [id]: state.showsCart.combos[id] - 1
          }
        }
      }

      if (state.showsCart.combos[id] === 0) {
        delete newState.showsCart.combos[id];
      }
    }

    return newState;
  }

  else if (type === profshows.INC_SHOW_QTY) {
    let newState;
    let id = action.id;
    if (state.showsCart.individual[id]) {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          individual: {
            ...state.showsCart.individual,
            [id]: state.showsCart.individual[id] + 1
          }
        }
      }
    }
    else {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          individual: {
            ...state.showsCart.individual,
            [id]: 1
          }
        }
      }
    }

    return newState;
  }
  else if (type === profshows.DEC_SHOW_QTY) {
    let newState = {...state}, id = action.id;
    if (state.showsCart.individual[id] && state.showsCart.individual[id] > 0) {
      newState = {
        ...state,
        showsCart: {
          ...state.showsCart,
          individual: {
            ...state.showsCart.individual,
            [id]: state.showsCart.individual[id] - 1
          }
        }
      }

      if (state.showsCart.individual[id] === 0) {
        delete newState.showsCart.individual[id];
      }
    }

    return newState;
  }

  return { ...state };
}

export {
  reducer as profshows
}