import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Login from '../components/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
};

export default Routes;
