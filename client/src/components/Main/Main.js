import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Home from '../Home/Home';
import User from '../User/User';
import EventsPage from '../EventsPage/EventsPage';
import requireAuth from '../RequireAuth/RequireAuth';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route path='/user' component={User}/>
        <Route path='/events' component={requireAuth(EventsPage)}/>
      </Switch>
    </main>
  )
}

export default Main

