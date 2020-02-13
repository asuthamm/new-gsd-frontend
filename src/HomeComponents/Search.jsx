import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Container } from 'semantic-ui-react'



class Search extends Component {
    
    handleChange = (e) => {
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
                <div >
                        <label className="add-toy-form" for="inpt_search">
                            Search
                            <input className="add-toy-form" value={this.props.searchValue} onChange={this.handleChange} />
                            <i className="search icon" />
                        </label>
                </div>
        );
    }
}

export default withRouter(Search);