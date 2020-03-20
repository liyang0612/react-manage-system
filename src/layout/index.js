import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const a = function() {
  return 1;
};
console.log(a);
export default class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/login">login</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
