import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';

export default class SearchNameTypeInput extends Component {

    //initializes state
    state = {
        data: [],
        searchQuery: '',
        type: '',
        textSelection: 'pokemon',  
    }

    //searches by name or type
    handleChange= (e) => {
        const value = e.target.value;
        
        this.setState({ searchQuery: value, type: value });
    }

    handleClick = async () => {
        //sends the value of the input to the api and waits for the returned data
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.textSelection}=${this.state.searchQuery}`);
        //sets the state to the returned data and to the body of the page
        this.setState({ data: fetchedData.body.results });
        console.log(fetchedData);
    }

    render() {
        return (
            <div>
                <div className="word-search">
                    <label>Search by Name or Type:  </label>
                    <input className="pokemon-search" onChange={this.handleChange} placeholder="Enter Name or Type"/>
                    <button onClick={this.handleClick}>Search</button>
                </div>
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
