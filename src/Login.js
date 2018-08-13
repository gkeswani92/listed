import React from 'react';
import LoginModal from './LoginModal';


class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        'loggedIn': false,
        'username': '',
        'modalIsOpen': false,
        'text': 'Login'
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }

  handleClick() {
    this.setState({
      'modalIsOpen': true,
    });
  }

  handleClose(e) {
    console.log('Close button click');
    this.setState({
      'modalIsOpen': false,
    });
  }

  handleSuccessfulLogin(name) {
    console.log(name + ' logged in');
    this.setState({
      'username': name,
      'modalIsOpen': false,
      'text': 'Welcome ' + name,
      'loggedIn': true
    });
  }

  render() {
    console.log(this.state.modalIsOpen);
    return (
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li>
                <button
                  href="#"
                  className="btn btn-outline-danger top-btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={this.handleClick}
                  disabled={this.state.loggedIn}>
                  {this.state.text}
                </button>
              </li>
          </ul>
          <LoginModal
            modalIsOpen={this.state.modalIsOpen}
            onClose={this.handleClose}
            onSuccessfulLogin={this.handleSuccessfulLogin}
          />
      </div>
    );
  }
}

export default Login;
