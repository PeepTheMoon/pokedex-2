import ListPage from './ListPage.js';
// import Header from './Header.js';
// import Footer from './Footer.js';
import DetailsPage from './DetailsPage.js';
import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    // Link,
    // useParams
} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/character/:name" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
