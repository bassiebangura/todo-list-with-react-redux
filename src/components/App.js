import React, { Component } from 'react';
import Todos from "./Todos.js";
import Goals from "./Goals.js";
import { todos, goals } from '../reducers';
import { createStore, combineReducers, applyMiddleware } from "redux";

const ADD_GOAL = 'ADD_GOAL';
const ADD_TODO = 'ADD_TODO';


let checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) return alert("Nope! Bad Idea");

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) return alert("Nope! Bad Idea");

  return next(action)
}

const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log("The action:", action)
  const result = next(action)
  console.log("The new state:", store.getState())
  console.groupEnd()
  return result
}


const store = createStore(combineReducers({
  todos,
  goals
}), applyMiddleware(checker, logger))
class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {

    const { todos, goals } = store.getState();

    return (
      <div className="App">
        <Todos todos={todos} store={store} />
        <Goals goals={goals} store={store} />
      </div>
    );
  }
}



export default App;

