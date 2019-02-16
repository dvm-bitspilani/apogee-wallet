import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import Login from './Login'
// import styles from './App.module.css'
import store from '@/store'
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <CssBaseline />
            <Switch> 
              <Route exact path="/login" component={Login}/>
              <Route path="/" component={Nav}/>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;