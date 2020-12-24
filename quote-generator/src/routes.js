import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Author from "./Author";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/:author" exact component={Author} />
    </Switch>
  );
}
