import React, { useState } from 'react';
import ChatMessage from './ChatMessage'; // Import the ChatMessage component

const ChatbotWindow = ({ isChatbotWindowOpen, setIsChatbotWindowOpen  }) => {
  
    return (
      <>      
      <div style={{position: 'sticky',
    top: 0,
    zIndex: 999,
    width: '100%',
    height: '600px',
    border: 'none'}}>

      
        {isChatbotWindowOpen ? <ChatbotPopup onClose={() => setIsChatbotWindowOpen(false)} /> : <MinimizedChatbot onOpen={() => setIsChatbotWindowOpen(true)} />}
        </div></>
    );
  };

const ChatbotPopup = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  // Function to handle sending a message
  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you can send the message to the chatbot API and get the response
    // For demo purposes, let's assume the response is received after some time
    setTimeout(() => {
      setMessages([...messages, { text: "I'm a response from the chatbot!", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chatbot-popup" 
    style={{position: 'sticky',
    bottom: 0,
    zIndex: 999,
    width: '100%',
    height: '100%',
    border: 'none'}}
    >
      {/* Header with close button */}
      <div className="header">
        <span>Chatbot Name</span>
        <button className='minimize-button' onClick={onClose}>Close</button>
      </div>

      {/* Chat messages */}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} sender={message.sender} />
        ))}
      </div>

      {/* Input field for user messages */}
      <div className="input-container">
        <input type="text" placeholder="Type your message..." onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage(e.target.value);
            e.target.value = '';
          }
        }} />
        <button onClick={() => sendMessage(document.querySelector('.input-container input').value)}>Send</button>
      </div>
    </div>
  );
};

const MinimizedChatbot  = ({ onOpen }) => {
  return (
    <div className="chatbot-popup" 
    
    // style={{height: "62px"}}
    style={{position: 'sticky',
    height: "62px",
    top: 0,
    zIndex: 999,
    width: '100%',
    height: '600px',
    border: 'none'}}
    >
      {/* Header with close button */}
      <div className="header">
        <span>Chatbot Name</span>
        <button className='minimize-button' onClick={onOpen}>Open</button>
      </div>
    </div>
  );
};


export default ChatbotWindow;
