import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import TodoCardCon from './TodoCardCon';
import TodoForm from './TodoForm';
import Search from './Search';




class HomeContainer extends Component {

  render() {
    console.log(this.props.user)
    let {user, keptTodos} = this.props
    // let {todo_tasks} = this.props.user
    return (
      <div>
        <Search searchValue={this.props.searchValue} handleSearch={this.props.handleSearch}/>
        <ProfileCard userInfo={user}/>
        <TodoCardCon userTodos={keptTodos}/>
        <TodoForm/>
      </div>
    );
  }
}

export default withRouter(HomeContainer);