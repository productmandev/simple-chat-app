import React, { Component } from "react";
// import {Button} from "semantic-ui-react";
// import {SideMenuBarLayout} from "layouts";
import "./HomePage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGithubUser("milkers");
    // this.props.getGithubFollowers("milkers");
    this.props.getWaitlistUserPosition("5723903075170");
  }

  render() {
    console.log("HomePage, render; props: ", this.props);
    return <div>home page</div>;
  }
}

export default HomePage;
