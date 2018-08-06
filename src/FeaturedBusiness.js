import React from 'react';

class FeaturedBusiness extends React.Component {
  render() {
    return (
      <div className="col-md-4 card-1">
          <div className="card">
              <img className="card-img-top" src={this.props.imgURL} alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <ul className="card-rating">
                      <li>{this.props.rating}</li>
                      <li>{this.props.numRatings} ratings</li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                      <li>{this.props.costScale}</li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i></li>

                  </ul>
                  <p className="card-text">{this.props.reviewSnippet}</p>
              </div>
              <div className="card-bottom">
                  <p><i className="ti-location-pin"></i>{this.props.location}</p>
                  <span className="open-close_green">{this.props.openStatus}</span>
              </div>
          </div>
      </div>
    );
  }
}

export default FeaturedBusiness;
