import React, { Component } from 'react';
import PokemonItem from './PokemonItem.js';
import request from 'superagent';

export default class ListPage extends Component {

    state = {
        data: [],
        searchQuery: '',
        type: '',
        attack: 0,
        defense: 0,
        statSelection: 'attack'
    }

    handleChange= (e) => {
        const value = e.target.value;
        this.setState({ searchQuery: value, type: value });
    }

    handleClick = async () => {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.type_1}`);

        this.setState({ data: fetchedData.body.results });
    }

    //searches by attack or defense value
    handleAttackDefenseChange = (e) => {
        const value = e.target.value;
        
        this.setState({ attack: value, defense: value });
        
    }

    handleStatDropdown = (e) => {
        const value = e.target.value;
        
        this.setState({ statSelection: value })
    }
  
    handleAttackDefenseClick = async () => {
        const fetchedAttackDefense = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}`) ;

        this.setState({ data: fetchedAttackDefense.body.results })
    }

    render() {
        return (
            <div>
                <div className="dropdown-name-type">
                    <label>Choose Name or Type:  </label>
                    <select className="name-type">
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                    </select>
                </div>
                <div className="word-search">
                    <label>Search by Name or Type:  </label>
                    <input className="pokemon-search" onChange={this.handleChange} placeholder="Enter Name or Type"/>
                    <button onClick={this.handleClick}>Search</button>
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
                    <ul>
                        {
                            this.state.data.map((character) => {
                                return <div className="attack-defense-result">
                                    <PokemonItem character={character}/>
                                    </div>
                            })
                        
                        } 
                    </ul> 
                </div>
            </div>
        )
    }
}
