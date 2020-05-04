import React, { Component } from 'react';
// import data from './data.js';
import PokemonItem from './PokemonItem.js';
import request from 'superagent';

export default class ListPage extends Component {

    state = {
        data: [],
        searchQuery: ''
    }

    handleChange= (e) => {
        const value = e.target.value;
        this.setState({searchQuery: value});
    }

    handleClick = async () => {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
        this.setState({ data: fetchedData.body.results });
    }

    render() {
        return (
            <div>
                <input className="pokemon-search" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search Pokemon!</button>
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
