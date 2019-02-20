import * as vendors from '@/constants/vendors'

const intitialState = {}
const reducer = (state = intitialState, action) => {
  console.log('here')
  const { type } = action;
  if(type === vendors.SET_VENDORS) {
    console.log('setting Data')
    return {
      ...state, 
      vendors: action.payload 
    }
  }

  return {
    ...state
  }
}

export {
  reducer as vendors
}