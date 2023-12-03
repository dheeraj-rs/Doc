import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./style/chat.css";
import Config from "./components/config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
function ChatBot() {
  return (
    <div className="chatpopup">
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBot;
