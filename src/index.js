import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tratoli from './Tratoli';
import Package from './Package';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
<Router>
    <div>
        <Route path="/" component={Tratoli} />
        <Route path="/app" component={App}/>
        <Route path="/package" component={Package}/>
        </div>
</Router>

, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>  
            <Package></Package>
    </Provider>
,document.getElementById('root-redux'))
registerServiceWorker();
