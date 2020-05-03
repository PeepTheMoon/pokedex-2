import React, { Component } from 'react';
import data from './data.js';

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
                        {character.pokemon} is type 
                        {character.type_1} with an attack of 
                        {character.attack} and a defense of 
                        {character.defense}
                        <img alt="pokemon-character" src={character.url_image}/>
                        </div>
                   })
               } 
            </div>
        )
    }
}
