import React, { Component } from 'react';

import FeaturedCarousel from './FeaturedCarousel';
import Header from './Header';
import Search from './Search';

class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <Search />
            <FeaturedCarousel />
        </div>
    );
  }
}

export default Home;