import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOut();
  }
  render() {
    return (
      <Redirect to="/" />
    );
  }
}

export default connect(null, actions)(SignOut);