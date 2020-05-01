import React, { Component, Fragment } from "react";
import './ChatsMessage.css';
import LeftSideChat from "./LeftSideChat";
import RightSideChat from "./RightSideChat";
class ChatMessage extends Component {
  render() {
    return (
        <Fragment>
            <h4 className="text-center mb-4">A simple chat example</h4>
            <div className="container-fluid border-chat">
                <div className="row">
                    <LeftSideChat />
                   <RightSideChat />
                </div>
            </div>
        </Fragment>
        );
  }
}

export default ChatMessage;
