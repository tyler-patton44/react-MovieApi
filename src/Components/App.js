import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';
import Test from './Test/Test';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Prop from "./Movie/Movie";
import Event from "./Test/Test"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/test">Test</Link></li>
              </ul>
              <Route exact path="/" component={Movie} />
              <Route path="/test" component={Test} />                    
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
