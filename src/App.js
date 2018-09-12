import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Error from './Error';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*  
            - The switch component allows us to switch between routes.
            - It goes through all routes until one matches. The one that matches
            then renders its corresponding component.
            - If it does not match with any route, we can set a default route 
            that will be executed.
          */}
          <Switch>
            {/* Route to the home component whenever someone is going to index.html/home page */}
            <Route exact path="/" component={Home} />
            <Route exact path="/index.html" component={Home} />

            {/* Default route takes you to the error page */}
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
