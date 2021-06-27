import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {searchRobots} from './reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); //rootReducer; if there are multiple reducers, combine them to one root reducer

//pass down the store to App
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

