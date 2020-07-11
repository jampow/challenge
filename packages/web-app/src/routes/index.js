import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Signup from '../pages/signup'
import Signin from '../pages/signin'
import Dashboard from '../pages/dashboard'

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
