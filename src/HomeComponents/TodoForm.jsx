import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class TodoForm extends Component {

  state = {
    state: "",
    description: "",
    category: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log()
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1></h1>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={this.title} onChange={this.handleChange}/>

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={this.description} onChange={this.handleChange}/>

          <label htmlFor="category">Category:</label>
          <input type="text" name="category" value={this.category} onChange={this.handleChange}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(TodoForm);