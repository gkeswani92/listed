import React from 'react';
import SearchBar from './SearchBar';
import SearchTitle from './SearchTitle';

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
