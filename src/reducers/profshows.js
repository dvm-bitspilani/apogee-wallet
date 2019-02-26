import * as profshows from '@/constants/profshows'
const initialState = {
  allProfshowsData: {}
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
  return { ...state };
}

export {
  reducer as profshows
}