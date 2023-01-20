import React from "react";

function Message({ from, text, time }) {
  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from?.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </>
  );
}
export default Message;
