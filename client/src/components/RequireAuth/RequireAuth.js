import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      const { authenticated } = this.props.auth;
      const defaultPath ={ pathname: '/login' };
      if ( !authenticated) {
        return (
          <Redirect to={defaultPath}/>
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