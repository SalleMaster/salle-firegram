import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../components/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/sign-up' component={SignUp} />
    </Switch>
  );
};

export default Routes;
