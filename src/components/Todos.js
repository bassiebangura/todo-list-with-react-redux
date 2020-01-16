import React, {Component} from 'react';
import List from "./List.js";
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

class Todos extends Component {
   generateId = () => {
	//Helper function to generate unique id
	return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
}

     addTodoAction = (todo) => {
	return {
		type: ADD_TODO,
		todo
	};
}

 removeTodoAction = (id) => {
	return {
		type: REMOVE_TODO,
		id
	};
}
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.input.value = " ";
        	this.props.store.dispatch(
		this.addTodoAction({
			id: this.generateId(),
			name
		})
    );
    }

    removeItem = (todo) => {
        this.props.store.dispatch(this.removeTodoAction(todo.id))
    }

    render() {
        return (
            <div>
                <h1>Todos List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => this.input = input}>
                </input>
                <button onclick={this.addItem}>Add Todo</button>
                <List 
                items={this.props.todos} 
                remove={this.removeItem}
                />
            </div>
        )
       
    }
}

export default Todos;