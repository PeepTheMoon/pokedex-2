import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';
import PagingButtons from './PagingButtons.js';

export default class SearchAttackDefenseValue extends Component {

    state = {
        data: [],
        attack: 0,
        defense: 0,
        statSelection: 'attack',
        page: 1
    }

    handleStatDropdown = (e) => {
        const value = e.target.value;
        this.setState({ statSelection: value })
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

                <section>
                    <PagingButtons />
                </section>

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
