import React, {Component} from 'react';
import List from "./List.js";

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

class Goals extends Component {
    componentDidMount() {

    }
       generateId = () => {
	//Helper function to generate unique id
	return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
}

 addGoalAction = (goal) => {
     
	return {
		type: ADD_GOAL,
		goal
	};
}
    removeGoalAction = (id) => {
	return {
		type: REMOVE_GOAL,
		id
	};
}
 addItem = () => {

	let input = document.getElementById('goal');
	let name = input.value;
	input.value = '';

	this.props.store.dispatch(
		this.addGoalAction({
			id: this.generateId(),
			name
		})
	);
};
removeItem = (goal) => {
        this.props.store.dispatch(this.removeGoalAction(goal.id))
    }
    render() {
        return (
            <div>
                <h1>Goals List</h1>
                <input
                    type="text"
                    placeholder="Add Goal"
                    ref={(input) => this.input = input}>
                </input>
                <button onclick={this.addItem}>Add Goal</button>
                <List 
                    items={this.props.goals}
                    remove={this.removeItem}
                />
            </div>
        )
       
    }
}

export default Goals;