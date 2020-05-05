import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';

export default class DetailsPage extends Component {
    //initializes state
    state = {
        character: {pokemon: ''}
    }
    async componentDidMount() {
        //grabs everything after the question mark in the url
        const searchParams = new URLSearchParams(window.location.search);
        //looks for pokemon key in url, sets value equal to query
        const query = searchParams.get('search');
        //gets the search query and sets the state tot he new value
        this.setState({ searchQuery: query });
        if (query) {
            //if the query has mor than one page of results
            let page = 1;
            //if the search params has a page number, gets the page number from the search params
            if (searchParams.get('page')) {
                page = searchParams.get('page');
            }
        }
        //sends the request to the api and waits for a response
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        // sets the state to the data fetched from the api to the web page
        this.setState({ character: fetchedData.body.results[0] });
    }

    render() {
        return (
            //returns the fetched pokemon data to the page in rendered html
            <div>
                <PokemonItem character={this.state.character}/>
            </div>
        )
    }
}
