import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        return (
            <ul>
                <li className="pokemon-item">
                    <h2 className="pokemon-name">{this.props.character.pokemon}</h2>
                    <img className="pokemon-character" alt="pokemon-character" src={this.props.character.url_image}/>
                    <p className="pokemon-type">{this.props.character.type_1}</p>
                    <p className="pokemon-attack">{this.props.character.attack}</p>
                    <p className="pokemon-defense">{this.props.character.defense}</p>
                </li>
                
            </ul>
        )
    }
}
