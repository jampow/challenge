import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { getToken } from '../api/common'

const isAuthenticated = () => !!getToken()

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (
      isAuthenticated()
      ? children
      : (<Redirect to="/" />)
    )}
  />
)

export default PrivateRoute
