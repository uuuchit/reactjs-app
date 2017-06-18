import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tratoli from './Tratoli'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tratoli />, document.getElementById('tratoli'));
registerServiceWorker();
