import React from 'react';

import CardText from './CardText';

const CardBody = (props) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <ul className="card-rating">
                <li>{props.rating}</li>
                <li>{props.numRatings} ratings</li>
                <li><i className="fa fa-circle"></i></li>
                <li>{props.costScale}</li>
                <li><i className="fa fa-circle"></i></li>
                <li>{props.category}</li>
            </ul>
            <CardText reviewSnippet={props.reviewSnippet} />
        </div>
    );
}
 
export default CardBody;