import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

import { reducer } from './reducer'

import './index.css';

const store = createStore(reducer);

window.store = store;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
