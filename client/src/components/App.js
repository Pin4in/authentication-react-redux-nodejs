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
        <Main/>
      </div>
    );
  }
}

export default App;

// {helloMessage}
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// function Hello(props) {
//   return (
//     <h1>Hello my friend!</h1>
//   )
// }

// function LoginForm(props) {
//   return (
//     <form onSubmit={props.handleSubmit}>
//     <div>
//       <label>Email:</label>
//       <input type="text" name="email"
//           value={props.email}
//           onChange={props.handleChange}/>
//     </div>
//     <div>
//       <label>Password:</label>
//       <input type="password" name="password"
//           value={props.password}
//           onChange={props.handleChange}/>
//     </div>
//     <div>
//       <input type="submit" value="Log In"/>
//     </div>
//   </form>
//   )
// }


// function LoginForm(props) {
//   return (
//     <form onSubmit={this.handleSubmit}>
//     <div>
//       <label>Email:</label>
//       <input type="text" name="email"
//           value={this.state.email}
//           onChange={this.handleChange}/>
//     </div>
//     <div>
//       <label>Password:</label>
//       <input type="password" name="password"
//           value={this.state.password}
//           onChange={this.handleChange}/>
//     </div>
//     <div>
//       <input type="submit" value="Log In"/>
//     </div>
//   </form>
//   )
// }