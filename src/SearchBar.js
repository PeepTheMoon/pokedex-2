import React, { Component } from 'react';
import request from 'superagent';

//initializes state
state = {
    data: [],
    searchQuery: '',
    type: '',
    attack: 0,
    defense: 0,
    statSelection: 'attack',
    textSelection: 'pokemon',
    page: 1
}

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
