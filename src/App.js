import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Private from './components/authentication/Private';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src='./images/logo.svg' className="App-logo" alt="logo2" />
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
                <Route path="/register" component={Registration}/>
                <Route path="/private" component={Private}/>
                <Route path="/login" component={Login}/>
                <Route path="/test/:id" component={Test}/>
              </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

