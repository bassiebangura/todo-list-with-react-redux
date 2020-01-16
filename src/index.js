import React from 'react';
import './index.css';
import App from './components/App';
import {createStore} from "redux";
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import appReducer from './reducers';

const store = createStore(appReducer)
render(
  
    <App store={store} />,
 
  document.getElementById('root')
)

