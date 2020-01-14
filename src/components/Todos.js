import React, {Component} from 'react';
import List from "./List.js";


class Todos extends Component {
   
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.input.value = " ";
    //     	this.props.store.dispatch(
	// 	addTodoAction({
	// 		id: generateId(),
	// 		name
	// 	})
	// );
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