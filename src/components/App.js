import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Test from './Test'
import styles from './App.module.css'
import store from '../store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Test />
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