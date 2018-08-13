import React from 'react';
import Modal from 'react-modal';
import LoginModalTab from './LoginModalTab';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : 450
  }
};

class LoginModal extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="login" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">LOGIN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="sign-up" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">SIGN UP</a>
                </li>
              </ul>
              <LoginModalTab
                handleClose={this.props.onClose}
                onSuccessfulLogin={this.props.onSuccessfulLogin}
              />
            </div>
          </div>
      </Modal>
    );
  }
}

export default LoginModal;
