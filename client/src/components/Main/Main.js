import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import User from '../User/User';
import EventsPage from '../EventsPage/EventsPage';
import requireAuth from '../RequireAuth/RequireAuth';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route path='/user' component={User}/>
        <Route path='/events' component={requireAuth(EventsPage)}/>
      </Switch>
    </main>
  )
}

export default Main
