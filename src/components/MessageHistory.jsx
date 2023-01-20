import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

function MessageHistory({ messages }) {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id} className="clearfix">
          {message?.type === "message" && <Message {...message} />}
          {message?.type === "response" && <Response {...message} />}
          {message?.type === "typing" && <Typing {...message} />}
        </li>
      ))}
    </ul>
  );
}
export default MessageHistory;
