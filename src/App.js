import React, { Component } from 'react';
import ListPage from './ListPage.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="PokemonApp">
        <ListPage />
        
      </div>
    )
  }
}
