import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/App.css'
import Private from './components/authentication/Private';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar is-warning">
            <div className='navbar-brand'>
              <img src='./images/logo.svg' className="App-logo" alt="logo2" />
              <div className='navbar-burger'></div>
            </div>
            <div className='navbar-menu is-active'>
              <div className='navbar-start'>
                <a className='navbar-item' href="/">Home</a>
              </div>
            </div>
          </nav>

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

