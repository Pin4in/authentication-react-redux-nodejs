import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      const { authenticated } = this.props.auth;
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      if ( !authenticated) {
        return (
          <Redirect to={from}/>
        )
      }      
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}