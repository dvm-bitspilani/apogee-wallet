import * as ui from '@/constants/ui'

const initialState = {
  isLoaderShown: false,
  isSnackbarShown: true,
  snackbarMessage: "askfd"
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === ui.SHOW_LOADER){
    return {
      ...state,
      isLoaderShown: true
    }
  }
  else if(type === ui.HIDE_LOADER){
    return {
      ...state,
      isLoaderShown: false
    }
  }
  else if(type === ui.SHOW_SNACKBAR){
    console.log(action)
    const newState =  {
      ...state,
      isSnackbarShown: true,
      snackbarMessage: action.payload.message
    }
    console.log(newState)
  }
  else if(type === ui.HIDE_SNACKBAR){
    return {
      ...state,
      isSnackbarShown: false
    }
  }
  return { ...state };
}

export {
  reducer as ui
}