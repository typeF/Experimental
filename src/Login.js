import React, { Component, Fragment } from 'react';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="login-form">
          <form action="/login" method="post">
            <input type="email"/>
            <input type="password"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Login;