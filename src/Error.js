import React from 'react';

import Header from './Header';

const Error = () => {
    return (
        <div className="App">
          <Header />
          <section className="main-block d-flex align-items-center error-404">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-page">
                            <h2>404</h2>
                            <p>The page you are looking for doesn't exist</p>
                            <a href="index.html" className="btn btn-outline-danger btn-confirmation">Go to Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
    );
}
 
export default Error;