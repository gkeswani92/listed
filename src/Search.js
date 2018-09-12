import React from 'react';
import { Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchTitle from './SearchTitle';
import Error from './Error';

class Search extends React.Component {
  render() {
    return (
      <section className="hero-wrap d-flex align-items-center">
          <div className="container">
              <SearchTitle />
              <SearchBar />
          </div>
      </section>
    )
  }
}

export default Search;
