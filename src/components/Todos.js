import React, {Component} from 'react';
import List from "./List.js";


class Todos extends Component {
   generateId = () => {
	//Helper function to generate unique id
	return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
}

     addTodoAction = (todo) => {
	return {
		// type: ADD_TODO,
		todo
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
                <List />
            </div>
        )
       
    }
}

export default Todos;