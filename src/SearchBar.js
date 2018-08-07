import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="row">
            <div className="col-md-12">
                <form>
                    <div className="search-box">
                        <div className="row">
                            <div className="col-md-6 search-box_line">
                                <div className="search-box1">
                                    <div className="search-box-title">
                                        <label>What?</label><br />
                                        <input type="text" name="#" className="search-form" placeholder="Eg: restaurant, spa, shopping" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search-box2">
                                    <div className="search-box-title">
                                        <label>Where?</label><br />
                                        <input type="text" name="#" className="search-form" placeholder="Eg: San Francisco, CA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-search">
                        <a href="#" className="btn btn-simple">Search →</a>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default SearchBar;
