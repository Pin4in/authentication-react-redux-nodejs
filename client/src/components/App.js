import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      authenticated: false
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
        if (data.authenticated) {
          console.log('hurrey!')
          this.setState({
            authenticated: true
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;