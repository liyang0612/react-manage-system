import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from '../views/Login'
import BasicLayout from '../layout'
import config from './config'

const history = createBrowserHistory()

export default function MsRouter () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <BasicLayout history={history} config={config} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}