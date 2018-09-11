import React from 'react';
import Login from './Login';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'showLoginModal': false,
    }
  }

  render() {
    return (
      <div className="nav-menu sticky-top bg transition">
        <div className="container-fluid fixed">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="Listed" />
                </a>
                <button className="navbar-toggler" type="button">
                    <span className="ti-menu"></span>
                </button>
                <Login />
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
