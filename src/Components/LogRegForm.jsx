import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Register extends Component {

  state = {
    username: '',
    password: '',
    bio: '',
    img_url: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password, bio, img_url} = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{formName}</h1>
          <label htmlFor="username">Username:</label>
          <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
          <label htmlFor="password">Password:</label>
          <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
          {formName === "Register Form"? 
            (<p>
              <label htmlFor="bio">Bio:</label>
              <input type="text" autoComplete="off" name="bio" value={bio} onChange={this.handleChange}/>
              <label htmlFor="img_url">Profile Picture:</label>
              <input type="text" autoComplete="off" name="img_url" value={img_url} onChange={this.handleChange}/>
            </p>) : null}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);