import React from 'react'
import Home from '../views'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">login</Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
