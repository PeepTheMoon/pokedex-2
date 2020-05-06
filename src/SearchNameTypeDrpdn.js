import React, { Component } from 'react';

export default class SearchNameTypeDrpdn extends Component {

    //initializes state
    state = {
        data: [],
        searchQuery: '',
        type: '',
        textSelection: 'pokemon',  
    }

    handleTextDropdown = (e) => {
        const value = e.target.value;
        this.setState({ textSelection: value });
    }

    render() {
        return (
            <div>
                <div className="dropdown-name-type">
                    <label>Choose Name or Type:  </label>
                    <select className="name-type" onChange={this.handleTextDropdown}>
                        <option value="pokemon">Name</option>
                        <option value="type">Type</option>
                    </select>
                </div>
            </div>
        )
    }
}
