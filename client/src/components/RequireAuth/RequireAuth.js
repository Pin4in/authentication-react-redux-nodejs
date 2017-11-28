import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
  class Authentication extends Component {
    // static propTypes ={
    //   router: PropTypes.object
    // }

    render() {
      console.log('context', this.context);
      console.log('is authenticated', this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}