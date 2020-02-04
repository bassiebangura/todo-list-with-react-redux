import React, {Component} from 'react';
import List from "./List.js";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./Constants";



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
toggleTodoAction = (id) => {
	return {
		type: TOGGLE_TODO,
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

    removeItem = (id) => {
        this.props.store.dispatch(this.removeTodoAction(id))
    }

    toggleItem = (id) => {
        this.props.store.dispatch(this.toggleTodoAction(id))
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
                <button onClick={this.addItem}>Add Todo</button>
                <List 
                items={this.props.todos} 
                remove={this.removeItem}
                toggle={this.toggleItem}
                />
            </div>
        )
       
    }
}

export default Todos;