import React, {Component} from 'react';
import List from "./List.js";

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const TOGGLE_GOAL = 'TOGGLE_GOAL';

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

toggleGoalAction = (id) => {
	return {
		type: TOGGLE_GOAL,
		id
	};
}
 addItem = (e) => {
     e.preventDefault();
	const name = this.input.value;
	this.input.value = '';

	this.props.store.dispatch(
		this.addGoalAction({
			id: this.generateId(),
			name
		})
	);
};
removeItem = (id) => {
        this.props.store.dispatch(this.removeGoalAction(id))
    }

      toggleItem = (id) => {
        this.props.store.dispatch(this.toggleGoalAction(id))
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
                <button onClick={this.addItem}>Add Goal</button>
                <List 
                    items={this.props.goals}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        )
       
    }
}

export default Goals;