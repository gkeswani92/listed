import React from 'react';

import FeaturedBusiness from './FeaturedBusiness';

class FeaturedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured_businesses: [
        {
          title: "Golden Boy Pizza",
          rating: 4.5,
          imageURL: "https://s3-media1.fl.yelpcdn.com/bphoto/F8OxoXdS51h2VfU9Je2cNQ/o.jpg",
          numRatings: 2967,
          costScale: "$",
          category: "Pizza",
          reviewSnippet: "What I like most about golden boy is it's straight and to the point. They have 5 different types of pizza ready for the taking; Cheese, pepperoni or sausage, clam/garlic, pesto/vegetarian and a combination.",
          location: "San Francisco",
          isOpen: true,
        }, 
        {
          title: "The Bird",
          rating: 4.1,
          imageURL: "https://s3-media1.fl.yelpcdn.com/bphoto/F8OxoXdS51h2VfU9Je2cNQ/o.jpg",
          numRatings: 972,
          costScale: "$$",
          category: "Sandwiches",
          reviewSnippet: "Holy chicken sandwich, batman! The Chicken is a perfectly cooked piece of white meat that took over the whole bun. I got the spicy, but don't be deterred if you're not a spice person.  This is more flavor than heat.",
          location: "San Francisco",
          isOpen: true,
        }, 
        {
          title: "Bi-Rite Creamery",
          rating: 4.5,
          imageURL: "https://s3-media2.fl.yelpcdn.com/bphoto/orW7CXAlnSwOFcXZ2kB-lg/o.jpg",
          numRatings: 4852,
          costScale: "$$",
          category: "Ice Cream",
          reviewSnippet: "Amazingly creamy vanilla and chocolate soft serves that are perfect for a summer day spent in Dolores Park.",
          location: "San Francisco",
          isOpen: false,
        }, 
      ]
    }
  }

  render() {
    return (
      <section className="main-block featured-wrap">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col titile-block">
                  <h2>Featured Listings</h2>
                  <p>These listings are featured and rated popular by our community</p>
                </div>
            </div>
            <div className="row">
                {
                  this.state.featured_businesses.map((featured_business) => {
                    return (
                      <FeaturedBusiness
                        className="col"
                        title={featured_business.title}
                        rating={featured_business.rating}
                        imgURL={featured_business.imageURL}
                        numRatings={featured_business.numRatings}
                        costScale={featured_business.costScale}
                        category={featured_business.category}
                        reviewSnippet={featured_business.reviewSnippet}
                        location={featured_business.location}
                        isOpen={featured_business.isOpen}
                      />
                    );
                  })
                }
            </div>
        </div>
    </section>
  );
  }
}

export default FeaturedCarousel;
