import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';

export default class DetailsPage extends Component {
    state = {
        character: {pokemon: ''}
    }
    async componentDidMount() {
        //grabs everything after the question mark in the url
        const searchParams = new URLSearchParams(window.location.search);
        //looks for pokemon key in url, sets value equal to query
        const query = searchParams.get('search');
        //
        this.this.setState({ searchQuery: query });
        if (query) {
            let page = 1;
            if (searchParams.get('page')) {
                page = searchParams.get('page');
            }
        }
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
