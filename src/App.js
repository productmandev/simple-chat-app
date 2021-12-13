import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routeList from "routes";

import { FriendsPageContainer, MessagePageContainer } from "containers";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FriendsPageContainer} />

          <Route path={routeList.user.path} component={MessagePageContainer} />

          <Route>
            <div>no match page</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
