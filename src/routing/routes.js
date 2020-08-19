import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SingUp from '../components/SignUp';
import Landing from '../components/Landing';

const routes = () => {
  return (
    <Switch>
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/' component={Landing} />
    </Switch>
  );
};

export default routes;
