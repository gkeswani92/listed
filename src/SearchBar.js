import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText': '',
      'locationText': '',
    }
    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
  }

  encodeQueryData(data) {
     let ret = [];
     for (let d in data)
       ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
     return ret.join('&');
  }

  handleSearchTextInput(e) {
    this.setState({
      'searchText': e.target.value,
    });

    let queryParams = {'text': this.state.searchText};
    let encodedQueryParams = this.encodeQueryData(queryParams);
    fetch('http://localhost:8000/search_suggest?'+encodedQueryParams)
      .then((resp) => resp.json())
      .then(function(data) {
        // Here you get the data to modify as you please
        console.log(data);
      });
  }

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
                                        <input type="text" name="#" className="search-form" placeholder="Eg: restaurant, spa, shopping" onChange={this.handleSearchTextInput}/>
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
