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
    let userInput = e.target.value;

    // Handling rate limiting calls to the backend in a hacky way by limiting
    // it to when the user input is a multiple of 3 characters
    if(userInput && userInput.length % 3 == 0) {
      let queryParams = {'text': userInput};
      let encodedQueryParams = this.encodeQueryData(queryParams);
      fetch('http://localhost:8000/search_suggest?'+encodedQueryParams)
        .then((resp) => resp.json())
        .then(function(data) {
          console.log(data);
        });
    }

    this.setState({
      'searchText': userInput,
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
