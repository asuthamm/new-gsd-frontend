import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import TodoCard from './TodoCard';



class TodoCardCon extends Component {

    render() {
        let showTodoCards = this.props.userTodos.map((todoObj) => ( <TodoCard key={todoObj.id} todoData={todoObj}/> ))
        return (
        <div>
            {showTodoCards}
        </div>
        );
    }
}

export default withRouter(TodoCardCon);