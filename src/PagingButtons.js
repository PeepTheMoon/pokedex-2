import React, { Component } from 'react';
import request from 'superagent';

export default class PagingButtons extends Component {

    state = {
        page: 1
    }

    //allows user to view the next page of results
    toNextPage = async () => {

        const nextPage = this.state.page + 1; 
        this.setState({ page: nextPage });

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}&page=${nextPage}`) ;
        const results = response.body.results;
        this.setState({ data: results });
    }

    //allows user to view the previous page of results
    toPreviousPage = async () => {
        const previousPage = this.state.page - 1;  
        this.setState({ page: previousPage }) 
      
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.statSelection}=${this.state.attack}&page=${previousPage}`) ;
        const results = response.body.results;
        this.setState({ data: results })
      }

    render() {
        return (
            // total pages / 20 
            //response.body.count
            // if next page is > than 801 / 20, there is no next page.  
            <div className="paging-buttons">
                {this.state.page > 1 && <button onClick={this.toPreviousPage}>Previous</button>}
              
                <button onClick={this.toNextPage}>Next</button>
            </div>
        )
    }
}
