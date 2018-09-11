import React from 'react';

class SignUpModalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'username': '',
      'password': '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    var that = this
    console.log(this.state);
    let data = {
      'username': this.state.username,
      'password': this.state.password,
    };
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
    }).then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
        if (data['is_login_successful']) {
          that.props.onSuccessfulLogin(data['first_name']);
        }
      });
  }

  handleUserNameChange(e) {
    this.setState({
      'username': e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      'password': e.target.value
    });
  }

  render() {
    return (
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-profile" role="tabpanel">
          <div className="modal-header">
            <h5 className="modal-title"><img src="images/logo.png" alt="logo" /></h5>
            <button type="button" className="close" data-dismiss="modal" onClick={this.props.handleClose}>
              <span className="ti-close"></span>
            </button>
          </div>

          {/* Signup Form */}
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control add-listing_form"
                  onChange={this.handleUserNameChange}
                  placeholder="Username" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control add-listing_form"
                  onChange={this.handlePasswordChange}
                  placeholder="Password" />
              </div>
              <div className="modal-footer justify-content-center">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up" />
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default SignUpModalTab;
