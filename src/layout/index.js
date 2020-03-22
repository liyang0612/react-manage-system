import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../views'
import styles from './index.module.scss'

export default function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.test}>2342</div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">login</Route>
      </Switch>
    </BrowserRouter>
  )
}
