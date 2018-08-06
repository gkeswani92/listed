import React from 'react';
import SearchBar from './SearchBar';
import SearchTitle from './SearchTitle';

class Header extends React.Component {
  render() {
    return (
      <div classNameName="nav-menu sticky-top">
        <div className="bg transition">
            <div className="container-fluid fixed">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            <button
                              className="navbar-toggler"
                              type="button" data-toggle="collapse"
                              data-target="#navbarNavDropdown"
                              aria-controls="navbarNavDropdown"
                              aria-expanded="false"
                              aria-label="Toggle navigation">
                                <span className="ti-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li><a href="index.html" className="btn btn-outline-danger top-btn"> Login </a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
