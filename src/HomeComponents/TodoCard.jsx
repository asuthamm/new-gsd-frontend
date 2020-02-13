import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class TodoCard extends Component {
    render() {
        // console.log(this.props.todoData)
        let {description, completed, category:{name}, title} = this.props.todoData
        return (
            <div className="card">
                <button className="del-btn">x</button>
                <h2>Title:</h2>
                <p>{title}</p>
                <h2>Description:</h2>
                <p>{description}</p>
                <h2>Completed:</h2>
                <p>{completed? "yes": "not yet"}</p>
                <h2>Category:</h2>
                <p>{name}</p>
            </div>
        );
    }
}

export default withRouter(TodoCard);