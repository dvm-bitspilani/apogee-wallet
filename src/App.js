import React, { Component} from 'react';
import Test from './Test'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.testClass}/>
        <Test />
      </div>
    );
  }
}

export default App;
