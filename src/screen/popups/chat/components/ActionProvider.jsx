import React from "react";
import { isPage } from "../../../../redux/features/ScreenSlice";
import { useDispatch } from "react-redux";
import Nameinput from "./Nameinput";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBotname = () => {
    const botMessage1 = createChatBotMessage("My name is chatbot.");
    const botMessage2 = createChatBotMessage(
      <Nameinput showName={handleUsername} />
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage2],
      }));
    }, 1000);
  };

  const handleUsername = (userName) => {
    const botMessage = createChatBotMessage(
      `Nice to meet you, ${userName}! What can I help you with?`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHelp = () => {
    const botMessage = createChatBotMessage(
      "I can assist you with various tasks. Try saying: hello, what is your name, exit"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      `'I'm sorry I didn't understand that. Type "help" for assistance.'`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGoodbye = () => {
    const botMessage = createChatBotMessage("Goodbye. Have a great day!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    setTimeout(() => {
      handleFinal();
    }, 3000);
  };
  const handleButton = () => {
    setTimeout(() => {
      handleNavigate()
    }, 1000);
  };

  const handleFinal = () => {
    dispatch(isPage(true));
  };
  const handleNavigate = () => {
    navigate("/secret")
    dispatch(isPage(true));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGoodbye,
            handleHelp,
            handleDefault,
            handleBotname,
            handleUsername,
            handleButton
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
