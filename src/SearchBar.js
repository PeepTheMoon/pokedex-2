import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';

export default class SearchAttackDefenseValue extends Component {

    state = {
        data: [],
        attack: 0,
        defense: 0,
        searchQuery: '',
        type: '',
        textSelection: 'pokemon', 
        statSelection: 'attack',
        page: 1
    }

    handleStatDropdown = (e) => {
        const value = e.target.value;
        this.setState({ statSelection: value })
    }

    handleTextDropdown = (e) => {
        const value = e.target.value;
        this.setState({ textSelection: value });
    }

    //searches by attack or defense value
    handleAttackDefenseChange = (e) => {
        const value = e.target.value;
        this.setState({ attack: value, defense: value });
    }

    //sends the value of the input to the api and waits for the returned data
    handleAttackDefenseClick = async () => {
        const fetchedAttackDefense = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}`) ;
        //sets the state to the returned data and to the body of the page
        console.log(fetchedAttackDefense);
        this.setState({ data: fetchedAttackDefense.body.results })
    }

   handleChange= (e) => {
        const value = e.target.value;
        this.setState({ searchQuery: value, type: value });
    }

    handleClick = async () => {
        //sends the value of the input to the api and waits for the returned data
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.textSelection}=${this.state.searchQuery}`);
        //sets the state to the returned data and to the body of the page
        console.log(fetchedData);
        this.setState({ data: fetchedData.body.results });
    } 

    render() {
        return (
            <div>
                <div className="dropdown-attack-defense">
                    <label>Choose Attack or Defense:  </label>
                    <select className="attack-defense" onChange={this.handleStatDropdown}>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>
                </div>
                
                 <div className="value-input">
                    <label>Search by Attack or Defense Value:  </label>
                    <input type="number" min="0" max="100" onChange={this.handleAttackDefenseChange} placeholder="Num"/>
                    <button onClick={this.handleAttackDefenseClick}>Search</button>
                </div>

                <div className="dropdown-name-type">
                    <label>Choose Name or Type:  </label>
                    <select className="name-type" onChange={this.handleTextDropdown}>
                        <option value="pokemon">Name</option>
                        <option value="type">Type</option>
                    </select>
                </div>

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
