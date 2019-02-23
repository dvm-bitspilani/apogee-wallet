import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import database from './firebaseConfig'

ReactDOM.render(<App />, document.getElementById('root'));

console.log(database);

serviceWorker.unregister();
