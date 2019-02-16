import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import Test from './Test'
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
              <Route exact path="/" component={Login}/>
              <Route path="/nav" component={Nav}/>
            </Switch>
          </Fragment>
          {/* <div> */}
            {/* <div className={styles.testClass}/> */}
              {/* <Route path="/test" component={() => <Test testProp="Hellow"/>}/> */}
            {/* <Test testProp="Hello"/> */}
          {/* </div> */}
        </Router>
      </Provider>
    );
  }
}

export default App;