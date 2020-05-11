import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar.js';

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

      handlePageChange= (e) => {
        const value = e.target.value;
        this.setState({ searchQuery: value, page: value });
    }

    handleClick = async () => {
        //sends the value of the input to the api and waits for the returned data
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?=${this.state.searchQuery}=${this.state.data}`);
        const page = fetchedData.page;
        //sets the state to the returned data and to the body of the page
        
        this.setState({ data: fetchedData.body.results, page: page });
    }

          //allows user to view the next page of results
    toNextPage = async () => {

        const nextPage = this.state.page + 1; 

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchQuery}=${this.state.data}&page=${nextPage}`) ;

        const results = response.body.results;
        this.setState({ data: results, page: nextPage });
    }

    //allows user to view the previous page of results
    toPreviousPage = async () => {
        const previousPage = this.state.page - 1;  
        this.setState({ page: previousPage }) 
      
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchQuery}=${this.state.data}&page=${previousPage}`) ;

        const results = response.body.results;
        this.setState({ data: results })
      }

    render() {
        return (
            <div>
                <section className="searchbar">
                    <SearchBar />
                </section>
                 <div className="paging-buttons">
                {this.state.page > 1 && <button onClick={this.toPreviousPage}>Previous</button>}
              
                <button onClick={this.toNextPage}>Next</button>
              </div>
            </div>
        )
    }
}


