import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-h1">
                    Welcome to the Pokedex!
                </h1>
                <h2 className="header-h2">
                    Search for Pokemon based on their name, type, attack, and defense.
                </h2>
            </div>
        )
    }
}
