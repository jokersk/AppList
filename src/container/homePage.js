import React, { Component } from 'react';
import SearchBar from "./searchBar"
import Recommend from "./recommend"
import AppList from "./appList"

import './../style/style.scss';

class HomePage extends Component {
    render()
    {
        return (
            <div className="home-wrapper">
                <SearchBar  />
                <Recommend />
                <AppList />
            </div>    
        )
    }
}

export default HomePage;