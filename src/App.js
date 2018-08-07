import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FeaturedCarousel from './FeaturedCarousel';
import Header from './Header';
import Search from './Search';

class App extends Component {

  componentDidMount() {
    console.log("App has mounted");
    fetch('http://localhost:8000')
      .then((resp) => resp.json())
      .then(function(data) {
        // Here you get the data to modify as you please
        console.log(data['text']);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <FeaturedCarousel />
      </div>
    );
  }
}

export default App;
