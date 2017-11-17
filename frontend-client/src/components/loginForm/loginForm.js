import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      authenticated: false,
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://127.0.01:3030/login', {
        "email": this.state.email,
        "password": this.state.password
      })
      .then(({data}) => {
        console.log(data);
        if (data.authenticated) {
          this.setState({
            authenticated: true
          });
        } else {
          this.setState({
            errorMessage: data.message
          })
        }
      })
      .catch(err => {
        console.log('err', err)
      });
  }

  render() {
    const { authenticated } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/user' } }
    const errorMessage = this.state.errorMessage ? 
      (<p>{this.state.errorMessage}</p>) : null;

    if (authenticated) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        { errorMessage }
        <div>
          <label>Email:</label>
          <input type="text" name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password"
              value={this.state.password}
              onChange={this.handleChange}/>
        </div>
        <div>
          <input type="submit" value="Log In"/>
        </div>
      </form>
    );
  }
}

export default LoginForm;