import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src='../public/images/logo.svg' className="App-logo" alt="logo2" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/admin">Admin</Link></li>
              </ul>

              <div className="content">
                <Route path="/account" component={Home}/>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
