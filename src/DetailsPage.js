import React, { Component } from 'react';
import request from 'superagent';

export default class DetailsPage extends Component {
    state = {
        character: {}
    }
    async componentDidMount() {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        console.log(fetchedData);
        this.setState({ character: fetchedData.body.result });
    }

    render() {
        return (
            <div>
                Yo Yo helloooo
            </div>
        )
    }
}
