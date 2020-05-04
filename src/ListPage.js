import React, { Component } from 'react';
import data from './data.js';
import PokemonList from './PokemonList.js';

export default class ListPage extends Component {

    state = {
        data: data.results
    }
    render() {
        // console.log(this.state.data);
        return (
            <div>
               {
                   this.state.data.map((character) => {
                    return <div className="pokemon-card">
                        <PokemonList character={character}/>
                        </div>
                   })
               } 
            </div>
        )
    }
}
