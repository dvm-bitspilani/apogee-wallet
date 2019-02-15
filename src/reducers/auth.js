const initialState = {
  isLoggedIn: false
}

const reducer = (state = initialState, _) => {
  console.log('Triggered1');
  return {
    isLoggedIn: !state.isLoggedIn
  }
}

export {
  reducer as auth
}