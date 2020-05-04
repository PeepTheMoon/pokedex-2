import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonItem extends Component {
    render() {
        return (
                <ul>
                    <li className="pokemon-item">
                        <Link to={`/character/${this.props.character.pokemon}`}>
                        <h2 className="pokemon-name">{this.props.character.pokemon.toUpperCase()}</h2>
                        <img className="pokemon-character" alt={this.props.character.pokemon} src={this.props.character.url_image}/> </Link>
                        <p className="pokemon-type">Type = {this.props.character.type_1}</p>
                        <p className="pokemon-attack">Attack = {this.props.character.attack}</p>
                        <p className="pokemon-defense">Defense ={this.props.character.defense}</p>
                    </li>
                </ul>
        )
    }
}
