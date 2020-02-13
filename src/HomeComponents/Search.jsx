import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Search extends Component {
    
    handleChange = (e) => {
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
                <div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" value={this.props.searchValue} onChange={this.handleChange} />
                        <i className="search icon" />
                    </div>
                </div>
        );
    }
}

export default withRouter(Search);