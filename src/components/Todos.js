import React, {Component} from 'react';
import List from "./List.js";

class Todos extends Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <List />
            </div>
        )
       
    }
}

export default Todos;