import { ApolloProvider } from '@apollo/react-hooks'
import client from './apolloClient'
import React from 'react'
import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Toolbar from './components/profile/Toolbar'

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/:user">
            <Toolbar />
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  )
}
