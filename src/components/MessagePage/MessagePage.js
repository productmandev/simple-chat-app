import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./MessagePage.scss";

class MessagePage extends Component {
  constructor(props) {
    super(props);
    const { params } = props.match;

    this.state = {
      messages: props.messages.messageList[params.userName] || [],
      messageText: "",
    };
  }

  renderMessagePageHeader = () => {
    const { params } = this.props.match;
    return (
      <div className="header-wrapper">
        <Button
          basic
          circular
          icon="arrow left"
          size="mini"
          onClick={() => this.props.history.goBack()}
        />
        <div className="header-name-wrapper">
          <h3>{params.userName}</h3>
        </div>
      </div>
    );
  };

  handleMessageTextChange = (e, data) => {
    const { value } = data;
    // console.log("onChange; e, data: ", e, data);

    this.setState({
      messageText: value,
    });
  };

  handleMessageSubmit = (e, data) => {
    const { params } = this.props.match;
    const { messages, messageText } = this.state;
    // console.log("onSubmit; e, data, messageText: ", e, data, messageText);

    if (messageText === "") {
      return;
    }

    const newMessages = [...messages];
    newMessages.push(messageText);

    // store newMessages in store.
    this.props.saveUserMessages(params.userName, newMessages);

    this.setState({
      messages: newMessages,
      messageText: "",
    });

  };

  renderMessageList = () => {
    const { messages } = this.state;

    const messageList = messages.map((message, idx) => {
      return (
        <div className="message-item" key={`m-${idx}`}>
          <span>{message}</span>
        </div>
      );
    });
    return <div className="message-list-area">{messageList}</div>;
  };

  render() {
    console.log("MessagePage, render; props: ", this.props);
    const { messageText } = this.state;

    return (
      <div className="page message-page">
        {this.renderMessagePageHeader()}
        <div className="message-list-overflow">
          {this.renderMessageList()}
        </div>
        <div className="message-input-wrapper">
          <Form onSubmit={this.handleMessageSubmit}>
            <Form.Input
              value={messageText}
              onChange={this.handleMessageTextChange}
              placeholder="Write your message here..."
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default MessagePage;
