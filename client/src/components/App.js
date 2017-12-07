import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import Header from './Header/Header';
// import Main from './Main/Main';
import './App.css';

import LoginForm from './LoginForm/LoginForm';
import Home from './Home/Home';
import User from './User/User';
import EventsPage from './EventsPage/EventsPage';
import requireAuth from './RequireAuth/RequireAuth';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route path='/user' component={User}/>
          <Route path='/events' component={requireAuth(EventsPage)}/>
        </div>
      </div>
    );
  }
}

export default App;