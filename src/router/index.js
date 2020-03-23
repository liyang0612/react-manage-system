import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../views/Login'
import BasicLayout from '../layout'

export default function MsRouter () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BasicLayout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}