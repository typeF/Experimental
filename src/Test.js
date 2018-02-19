import React, { Component, Fragment } from 'react';

class Test extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span>User id is: {this.props.match.params.id}</span>
        </div>
      </Fragment>
    )
  }
}

export default Test;