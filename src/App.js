import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import {withRouter} from 'react-router-dom';
import './App.css';
import Form from './Components/LogRegForm'
import NavBar from './Components/NavBar'
import HomeContainer from './HomeComponents/HomeContainer'



class App extends Component {

  state = {
    user: {},
    token: '',
    searchValue: '',
    categories: []
  }

  componentDidMount() {
    // console.log('cdm...', this.state)
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          // console.log(data)
          this.setState({
            user: data.user,
            token: data.token
          }, () => {
            this.props.history.push("/home")
          })
        // console.log(data)
        }}
      )

      fetch("http://localhost:3000/categories")
      .then(resp => resp.json())
      .then(allCats => {
        this.setState({
          categories: allCats
        })
      })
      
    }
    else{
      this.props.history.push("/login")
    }

  }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  handleLoginSubmit = (userInfo) => {
    // console.log("Login form has been submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(data => {
      // console.log(data);
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          user: data.user,
          token: data.token
        }, () => {
          this.props.history.push("/home")
        })
      } else {
        this.props.history.push("/login")
      }
    })

  }

  handleRegisterSubmit = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(newUserData => {
      if (!newUserData.error) {
        localStorage.setItem("token", newUserData.token)
        this.setState({
          user: newUserData.user,
          token: newUserData.token
        }, () => {
          this.props.history.push("/home")
        })
      } else {
        this.props.history.push("/register")
      }
    })
  }

  handleTodoSubmit = (newTodoSentUp) => {
    // console.log(newTodoSentUp)
    let {title, description, category} = newTodoSentUp
    let {user} = this.state
    // console.log(this.state.user)
    let newTodoObj = {
      title,
      description,
      user_id: user.id,
      category_id: category
    }
    fetch(`http://localhost:3000/todo_tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'applicaton/json'
      },
      body: JSON.stringify(newTodoObj)
    })
    .then(resp => resp.json())
    .then(newTodoObj => {
      let tdt = [...this.state.user.todo_tasks, newTodoObj]
        this.setState({
          user: {
            ...user,
            todo_tasks: tdt
          }
        })
    })
  }

  handleSearchState = (searchValueSentUp) => {
    // console.log(searchValueSentUp)
    this.setState({
      searchValue: searchValueSentUp
    })
  }


  filteredToDos = () => {
    let {todo_tasks} = this.state.user
    // if (this.state.user){
    let keptTodo = this.state.user.todo_tasks.filter((todoObj) => {
      return todoObj.category.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    return keptTodo 
    // }
  }

  renderHomeContainer = (routerProps) => {
    return <HomeContainer handleTodoSubmit={this.handleTodoSubmit} keptTodos={Object.keys(this.state.user).length !== 0 ? this.filteredToDos(): []} allCat={this.state.categories} token={this.state.token} searchValue={this.state.searchValue} handleSearch={this.handleSearchState} user={this.state.user} />
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/home" render={ this.renderHomeContainer } />
          <Route path="/" exact render={ this.renderForm } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);