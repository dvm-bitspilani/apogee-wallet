import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import Test from './Test'
import Login from './Login'
// import styles from './App.module.css'
import store from '@/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <CssBaseline />
            <Switch> 
              <Route path="/" component={Login}/> 
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;