const reducer = (state = { count: 0 }, _) => {
  console.log('Triggered1');
  return {
    count: state.count + 1
  }
}

export {
  reducer as testReducer2
}