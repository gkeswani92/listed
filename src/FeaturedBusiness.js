import React from 'react';

import CardBody from './CardBody';
import CardBottom from './CardBottom';
import CardImage from './CardImage';
import CardText from './CardText';

const FeaturedBusiness = (props) => {
    return (
        <div className="col-md-4 card-1">
          <div className="card">
            <CardImage imgURL={props.imgURL} />
            <CardBody 
                title={props.title}
                rating={props.rating}
                costScale={props.costScale}
                category={props.category}
                reviewSnippet={props.reviewSnippet}
            />
            <CardBottom location={props.location} isOpen={props.isOpen} />
          </div>
        </div>
    );
}
 
export default FeaturedBusiness;
