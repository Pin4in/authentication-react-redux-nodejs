import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'

class User extends Component {
  componentWillMount() {
    this.props.fetchUser({id: 1});
  }
  render() {
    const { user } = this.props;
    if (user.id) {
      return (
        <div style={{padding: '20px'}}>
          <p>user email: {user.email}</p>
          <p>user id: {user.id}</p>
          <p> user name: {user.name}</p>
        </div>
      )
    }
    return (
      <div>
        <Loader />
     </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, actions)(User);