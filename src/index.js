import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import NOTIFY_API from './utils/Api';
import {rootReducer } from './reducers/index';

import './index.css';



ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
export { rootReducer, NOTIFY_API };
