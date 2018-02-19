import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Private from './Private';
import Login from './Login';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src='../public/images/logo.svg' className="App-logo" alt="logo2" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/private">Private</Link></li>
                <li><Link to="/test">Test</Link></li>
              </ul>

              <div className="content">
                <Route path="/private" component={Private}/>
                <Route path="/login" component={Login}/>
                <Route path="/test/:id" component={Test}/>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
