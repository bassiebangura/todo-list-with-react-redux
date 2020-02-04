import React, { Component } from 'react';
import Todos from "./Todos.js";
import Goals from "./Goals.js";
import {todos, goals} from '../reducers';
import {createStore, combineReducers} from "redux";

const store = createStore(combineReducers({
    todos,
    goals
}))

class App extends Component  {
	componentDidMount() {
		store.subscribe(() => this.forceUpdate())
  }
  
	render () {

    const {todos, goals} = store.getState();
   
  	return (
    <div className="App">
	    <Todos todos={todos} store={store}/>
	    <Goals goals={goals} store={store} />
    </div>
  );
	}
}



export default App;

