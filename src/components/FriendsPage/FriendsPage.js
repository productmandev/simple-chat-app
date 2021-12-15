import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BigHead } from '@bigheads/core'
import "./FriendsPage.scss";

class FriendsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendList: [
        "John",
        "Doe",
        "Max",
        "Lewis",
        "Seb",
        "Lando",
        "Checo"
      ]
    };
  }

  renderFriendsList = () => {
    const { friendList } = this.state;

    return friendList.map((friend, idx) => {
      return (
        <Link to={friend} key={`${friend}-${idx}`}>
          <div className="list-item" >
            <div className="avatar-wrapper">
              <BigHead />
            </div>
            <div className="name-wrapper">
              <h4>{friend}</h4>
            </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    console.log("FriendsPage, render; props: ", this.props);
    return (
      <div className="page friend-list-page">
        <div className="header-wrapper">
          <h3>Friends</h3>
        </div>
        <div className="friend-list-wrapper">
          {this.renderFriendsList()}
        </div>
      </div>
    );
  }
}

export default FriendsPage;
