import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
        );
    }
}

export default withRouter(NavBar);