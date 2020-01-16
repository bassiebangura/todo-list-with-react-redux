import React from 'react';
import './index.css';
import App from './components/App';
import {createStore, combineReducers} from "redux";
import { render } from 'react-dom';
//import { Provider } from 'react-redux';

import {todos, goals} from './reducers';

const store = createStore(combineReducers({
    todos,
    goals
}))
render(
  
    <App store={store} />,
 
  document.getElementById('root')
)

