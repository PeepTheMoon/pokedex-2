import React, { Component } from 'react';
import ListPage from './ListPage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="PokemonApp">
        <Header />
        <ListPage />
        <Footer />
      </div>
    )
  }
}
