import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {
  return (
    <Router>
      <Switch>
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

export default App
