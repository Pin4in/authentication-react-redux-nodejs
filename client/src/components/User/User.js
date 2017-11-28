import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../Loader/Loader'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userId: 1
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:3030/users/${this.state.userId}`)
      .then(({data}) => {
        console.log('user', data);
        this.setState({
          user: data
        });
        console.log(this.state.user);
      })
      .catch(err => {
        console.log('err', err)
      });
  }
  render() {
    const { user } = this.state.user ? this.state : false;
    if (user) {
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

export default User;