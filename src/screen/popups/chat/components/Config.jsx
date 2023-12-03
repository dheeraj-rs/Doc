import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ChatBot';

const Config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I help you?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default Config;
