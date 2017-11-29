import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-title">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/logout'>Signout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;