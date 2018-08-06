import React from 'react';

import FeaturedBusiness from './FeaturedBusiness';

class FeaturedCarousel extends React.Component {
  render() {
    return (
      <section className="main-block featured-wrap">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="titile-block">
                        <h2>Featured Listings</h2>
                        <p>These listings are featured and rated popular by our community</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <FeaturedBusiness
                  title="Golden Boy Pizza"
                  rating={4.5}
                  imgURL="https://s3-media1.fl.yelpcdn.com/bphoto/F8OxoXdS51h2VfU9Je2cNQ/o.jpg"
                  numRatings={2967}
                  costScale="$"
                  reviewSnippet="What I like most about golden boy is it's straight and to the point. They have 5 different types of pizza ready for the taking; Cheese, pepperoni or sausage, clam/garlic, pesto/vegetarian and a combination."
                  location="San Francisco"
                  openStatus="Open Now"
                />
                <FeaturedBusiness
                  title="The Bird"
                  rating={4.1}
                  imgURL="https://s3-media1.fl.yelpcdn.com/bphoto/swsVh8zitzh6gipKB4zaUA/o.jpg"
                  numRatings={972}
                  costScale="$$"
                  reviewSnippet="Holy chicken sandwich, batman! The Chicken is a perfectly cooked piece of white meat that took over the whole bun. I got the spicy, but don't be deterred if you're not a spice person.  This is more flavor than heat."
                  location="San Francisco"
                  openStatus="Open Now"
                />
                <FeaturedBusiness
                  title="Bi-Rite Creamery"
                  rating={4.5}
                  imgURL="https://s3-media2.fl.yelpcdn.com/bphoto/orW7CXAlnSwOFcXZ2kB-lg/o.jpg"
                  numRatings={9252}
                  costScale="$$"
                  reviewSnippet="Amazingly creamy vanilla and chocolate soft serves that are perfect for a summer day spent in Dolores Park."
                  location="San Francisco"
                  openStatus="Closed Now"
                />
            </div>
        </div>
    </section>
  );
  }
}

export default FeaturedCarousel;
