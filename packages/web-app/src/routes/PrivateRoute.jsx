import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { getToken } from '../api/common'
import AuthFrame from '../common/components/auth-frame'

const isAuthenticated = () => !!getToken()

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (
      isAuthenticated()
      ? (<AuthFrame>{children}</AuthFrame>)
      : (<Redirect to="/" />)
    )}
  />
)

export default PrivateRoute
