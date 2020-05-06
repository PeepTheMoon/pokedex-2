import React, { Component } from 'react';
// import PokemonItem from './PokemonItem.js';
import request from 'superagent';
// import SearchNameTypeDrpdn from './SearchNameTypeDrpdn.js';
import SearchNameTypeInput from './SearchNameTypeInput.js';
// import SearchAttackDefenseDrpdn from './SearchAttackDefenseDrpdn.js';
import SearchAttackDefenseValue from './SearchAttackDefenseValue.js';
import PagingButtons from './PagingButtons.js';

export default class ListPage extends Component {

//initializes state
    state = {
        data: [],
        searchQuery: '',
        type: '',
        attack: 0,
        defense: 0,
        statSelection: 'attack',
        textSelection: 'pokemon',
        page: 1
    }

    async componentDidMount(){
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('search') || '';
  
        this.setState({ searchQuery: query });
        
        if (query){
          let page = 1;

          if (searchParams.get('page')){
            page = searchParams.get('page');
            
          }

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`)
        const results = response.body.results;
        this.setState({ data: results })  

      } else {

          const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
          const results = response.body.results;
          this.setState({ data: results })
      }
      }

    // //searches by name or type
    // handleChange= (e) => {
    //     const value = e.target.value;
    //     this.setState({ searchQuery: value, type: value });
    // }
//event handler to get the value of the dropdown selection and sets state of selection to that value
    // handleTextDropdown = (e) => {
    //     const value = e.target.value;
    //     this.setState({ textSelection: value });
    // }

    // handleClick = async () => {
    //     //sends the value of the input to the api and waits for the returned data
    //     const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.textSelection}=${this.state.searchQuery}`);
    // //sets the state to the returned data and to the body of the page
    //     this.setState({ data: fetchedData.body.results });
    // }

    // //searches by attack or defense value
    // handleAttackDefenseChange = (e) => {
    //     const value = e.target.value;
    //     this.setState({ attack: value, defense: value });
    // }
//event handler to get the value of the dropdown selection and sets state of selection to that value
    // handleStatDropdown = (e) => {
    //     const value = e.target.value;
    //     this.setState({ statSelection: value })
    // }
//   //sends the value of the input to the api and waits for the returned data
//     handleAttackDefenseClick = async () => {
//         const fetchedAttackDefense = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}`) ;
// //sets the state to the returned data and to the body of the page
//         this.setState({ data: fetchedAttackDefense.body.results })
//     }

// //allows user to view the next page of results
//     toNextPage = async () => {

//         const nextPage = this.state.page + 1; 
//         this.setState({ page: nextPage });

//         const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}&page=${nextPage}`) ;
//         const results = response.body.results;
//         this.setState({ data: results });
//     }

//     //allows user to view the previous page of results
//     toPreviousPage = async () => {
//         const previousPage = this.state.page - 1;  
//         this.setState({ page: previousPage }) 
      
//         const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}&page=${previousPage}`) ;
//         const results = response.body.results;
//         this.setState({ data: results })
//       }

    render() {
        return (
            <div>
                <section className="searchbar">
                    {/* <SearchNameTypeDrpdn /> */}
                    <SearchNameTypeInput />
                    {/* <SearchAttackDefenseDrpdn /> */}
                    <SearchAttackDefenseValue />
                    <PagingButtons />
                </section>
                {/* <div className="dropdown-name-type">
                    <label>Choose Name or Type:  </label>
                    <select className="name-type" onChange={this.handleTextDropdown}>
                        <option value="pokemon">Name</option>
                        <option value="type">Type</option>
                    </select>
                </div> */}
                {/* <div className="word-search">
                    <label>Search by Name or Type:  </label>
                    <input className="pokemon-search" onChange={this.handleChange} placeholder="Enter Name or Type"/>
                    <button onClick={this.handleClick}>Search</button>
                </div> */}
                {/* <div className="dropdown-attack-defense">
                    <label>Choose Attack or Defense:  </label>
                    <select className="attack-defense" onChange={this.handleStatDropdown}>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                    </select>
                </div> */}
                {/* <div className="value-input">
                    <label>Search by Attack or Defense Value:  </label>
                    <input type="number" min="0" max="100" onChange={this.handleAttackDefenseChange} placeholder="Num"/>
                    <button onClick={this.handleAttackDefenseClick}>Search</button>
                </div> */}

                {/* {this.state.page > 1 && <button onClick={this.toPreviousPage}>Previous</button>}
              
                <button onClick={this.toNextPage}>Next</button> */}

                    {/* <ul>
                        {
                            this.state.data.map((character) => {
                                return <div className="pokemon-card">
                                    <PokemonItem character={character}/>
                                    </div>
                            })
                        } 
                    </ul> */}
                

            </div>
        )
    }
}
// total pages / 20 
//response.body.count
// if next page is > than 801 / 20, there is no next page.

