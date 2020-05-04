import React, { Component } from 'react';
import data from './data.js';
import PokemonItem from './PokemonItem.js';

export default class ListPage extends Component {

    state = {
        data: data.results
    }

    handleChange= () => {
        console.log('yo yo homes')
    }

    render() {
        return (
            <div>
                <input className="pokemon-search" onChange={this.handleChange}/>
                <label>Search Pokemon!</label>
                <ul>
                    {
                        this.state.data.map((character) => {
                            return <div className="pokemon-card">
                                <PokemonItem character={character}/>
                                </div>
                        })
                    } 
               </ul>
            </div>
        )
    }
}
