import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routeList from "routes";

import { FriendsPageContainer } from "containers";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FriendsPageContainer} />

          {/* <Route exact path={routeList.home.path} 
            component={FriendsPageContainer}
          />

          <Route path={routeList.about.path}
            component={AboutPage}
          /> */}

          <Route path={routeList.user.path}>
            <div>user page</div>
          </Route>

          <Route>
            <div>no match page</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
