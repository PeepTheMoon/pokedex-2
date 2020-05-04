import React, { Component } from 'react';
// import data from './data.js';
import PokemonItem from './PokemonItem.js';
import request from 'superagent';

export default class ListPage extends Component {

    state = {
        data: [],
        searchQuery: '',
        attack: 0
    }

    handleChange= (e) => {
        const value = e.target.value;
        this.setState({searchQuery: value});
    }

    handleClick = async () => {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

        this.setState({ data: fetchedData.body.results });
    }

    //searches by attack value
    handleAttackChange = (e) => {
        const value = e.target.value;
        
        this.setState({ attack: value});
    }
  
    handleAttackClick = async () => {
        const fetchedAttack = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.attack}`) ;
        console.log(fetchedAttack)
        this.setState({ data: fetchedAttack.body.results })
    }

    render() {
        return (
            <div>
                <div className="word-search">
                    <label>Search by Name:  </label>
                    <input className="pokemon-search" onChange={this.handleChange} placeholder="Enter Name"/>
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
                <div className="value-input">
                    <label>Search by Attack:  </label>
                    <input type="number" min="0" max="100" onChange={this.handleAttackChange} placeholder="Num"/>
                    <button onClick={this.handleAttackClick}>Search</button>
                    <ul>

                    {/* this is not working, plz help! It returns an array and logs it to the body but it doesn't filter the array for the attack value*/}

                        {
                            // const attackSearch = this.state.data.map((character) => {
                            //     return attackValue;
                            // })

                            // const attackValue = attackSearch.filter((character) => {
                            //     if(AttackValue >= character.attack) {
                            //         return <div className="attack">
                            //         <PokemonItem character={character}/>
                            //         </div>
                            // }

                            this.state.data.map((character) => {
                                return <div className="attack">
                                    <PokemonItem character={character}/>
                                    </div>
                            })
                        
                        } 
                    </ul> 
                </div>
                <div className="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                            <a href="#">Name</a>
                            <a href="#">Type</a>
                            <a href="#">Attack</a>
                            <a href="#">Defense</a>
                        </div>
                </div>
            </div>
        )
    }
}
