import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ItemList from './ItemList';

class Main extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<ItemList />} />
            </Routes>
        );
    }
}

export default Main;