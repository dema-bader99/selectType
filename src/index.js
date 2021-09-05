import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import productReducer from './redux/reducers/productReducer';
import cardReducer from './redux/reducers/cardReducer';

import App from './App';
import './index.css';

const rootReducer = combineReducers({
  product: productReducer,
  cardtype: cardReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
