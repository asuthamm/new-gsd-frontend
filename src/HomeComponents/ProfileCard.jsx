import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class ProfileCard extends Component {
  render() {
    console.log(this.props.userInfo)
    let {username, bio, img_url} = this.props.userInfo
    return (
      <div>
        <img src= {img_url} alt={username}/>
        <h1>{username}</h1>
        <h2>Bio:</h2>
        <h4>{bio}</h4>
      </div>
    );
  }
}

export default withRouter(ProfileCard);