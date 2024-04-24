import React from 'react';

const ChatMessage = ({ text, sender }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default ChatMessage;
