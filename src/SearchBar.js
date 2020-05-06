import React, { Component } from 'react';
import SearchNameType from './SearchNameType.js';
import SearchAttackDefense from './SearchAttackDefense.js';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <section className="searchbar">
                    <SearchNameType />
                    <SearchAttackDefense />
                </section>
            </div>
        )
    }
}
