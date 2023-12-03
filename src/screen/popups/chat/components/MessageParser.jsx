import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      actions.handleHello();
    } else if (lowerCaseMessage.includes("your name")) {
      actions.handleBotname();
    } else if (lowerCaseMessage.includes("help")) {
      actions.handleHelp();
    } else if (lowerCaseMessage.includes("exit")) {
      actions.handleGoodbye();
    } else if (lowerCaseMessage.includes("sc")) {
      actions.handleButton();
    } else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
