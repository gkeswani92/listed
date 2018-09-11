import React from 'react';

const CardBottom = (props) => {
     // Figure out the open status text and color depending on the isOpen prop
     var openStatus = "Open Now"
     var openStatusClass = "open-close_green"
     if(props.isOpen === false) {
         openStatus = "Closed Now"
         openStatusClass = "open-close_red"
     } 

    return (
        <div className="card-bottom">
            <p><i className="ti-location-pin"></i>{props.location}</p>
            <span className={openStatusClass}>{openStatus}</span>
        </div>
    );
};
 
export default CardBottom;