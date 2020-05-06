import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar.js';
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

    render() {
        return (
            <div>
                <section className="searchbar">
                    <SearchBar />
                </section>
                <section className="paging-buttons">
                    <PagingButtons />
                </section>
            </div>
        )
    }
}


