import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    this.props.signin({ email: this.state.email, password: this.state.password});
  }

  render() {
    const errorMessage = this.props.auth.error ? (<p>{this.props.auth.error}</p>) : null;
    const nextPath = { pathname: '/events' };

    if (this.props.auth.authenticated) {
      return (<Redirect to={nextPath} />);
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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(LoginForm);
