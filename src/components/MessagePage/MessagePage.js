import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./MessagePage.scss";

class MessagePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("MessagePage, render; props: ", this.props);
    return (
      <div className="page message-page">
        <span>messages</span>
      </div>
    );
  }
}

export default MessagePage;
