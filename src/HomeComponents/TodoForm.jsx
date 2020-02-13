import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class TodoForm extends Component {

  state = { 
    title: "", 
    description: "", 
    category: null
  }

  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleTodoSubmit(this.state)
    // console.log(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let showCat = this.props.allCat.map((catObj) => {
      return <option key={catObj.id} value={catObj.id}>{catObj.name}</option>
    })
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={this.title} onChange={this.handleChange}/>

          <label htmlFor="description">Description:</label>
          <input type="textarea" name="description" value={this.description} onChange={this.handleChange}/>

          <label htmlFor="category">Category:</label>
          {/* <input type="text" name="category" value={this.category} onChange={this.createCategory}/> */}
          <select value={this.state.category} name="category" onChange={this.handleChange}>
              {showCat}
          </select>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(TodoForm);