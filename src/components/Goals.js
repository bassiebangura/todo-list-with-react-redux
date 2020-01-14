import React, {Component} from 'react';
import List from "./List.js";

class Goals extends Component {
 addItem = () => {
    const {store} = this.props
	let input = document.getElementById('goal');
	let name = input.value;
	input.value = '';

	this.props.store.dispatch(
		addGoalAction({
			id: generateId(),
			name
		})
	);
};
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
                <List />
            </div>
        )
       
    }
}

export default Goals;