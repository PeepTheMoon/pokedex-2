import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';

export default class DetailsPage extends Component {
    state = {
        character: {pokemon: ''}
    }
    async componentDidMount() {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        
        this.setState({ character: fetchedData.body.results[0] });
    }

    render() {
        return (
            <div>
                <PokemonItem character={this.state.character}/>
            </div>
        )
    }
}
