import React from 'react';
import router from 'next/router';

const ChatbotItem = ({ id, name, icon }) => {
  const truncateName = (name) => {
    const max_chars = 20;
    return name.length > max_chars ? `${name.substring(0, max_chars)}...` : name;
  };

  const setChatbotId = (id) => {
    if (typeof window !== 'undefined') {
        if (localStorage) {
          localStorage.setItem('chatbot_id', id);
          router.push('/sources');
        }
      } 
  }

  return (
    <div className="home-chatbot-item" onClick={() => setChatbotId(id)}>
      <div className="home-chatbot-icon-circle">
      <div className="chatbot-icon">
        <img src={icon} style={{borderRadius: "50%"}} />
      </div>
      </div>
      <div className="home-chatbot-name">{truncateName(name)}</div>
    </div>
  );
};

export default ChatbotItem;
