import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/home';
import UserEdit from './screens/users/edit/index';
import LoginScreen from './screens/auth/login/index';
import RegisterScreen from './screens/auth/register';
import NotesScreen from './screens/notes/index';
import PrivateRouter from './components/auth/private_route';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen}  />
      <Route exact path='/register' component={RegisterScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <PrivateRouter exact path='/notes' component={NotesScreen} />
      <PrivateRouter exact path='/users/edit' component={UserEdit} />
    </Switch>
  </BrowserRouter>
)

export default Routes;