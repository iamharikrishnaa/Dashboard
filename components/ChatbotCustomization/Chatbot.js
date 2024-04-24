import React, {useState, useRef, useEffect} from 'react';
import ChatbotWindow from "./ChatbotWindow";
import ColorPicker from "./ColorPicker"
    
const Chatbot = ({setIsImagesChanged}) => {
  const [isChatbotWindowOpen, setIsChatbotWindowOpen] = useState(true);

  return (
      <ChatCustomization setIsImagesChanged={setIsImagesChanged} />
  );
}

const ChatCustomization = ({setIsImagesChanged}) => {
  const [name, setName] = useState('Chatbot');
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [welcomeMessage, setWelcomeMessage] = useState('Hey There!');
  const [isMessageEditable, setIsMessageEditable] = useState(false);
  const [editedMessage, setEditedMessage] = useState(welcomeMessage);
  const [chatMessageColor, setChatMessageColor] = useState('#d9ddff'); // Initial color state for ColorPicker 1
  const [userMessageColor, setUserMessageColor] = useState('#295bff'); // Initial color state for ColorPicker 2
  const [chatbotIcon, setChatbotIcon] = useState('/images/chatbot.png');
  const [chatbotLogo, setChatbotLogo] = useState('/images/company-logo.png');
  const [isUploadingIcon, setIsUploadingIcon] = useState(false);
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);

  const handleIconUpload = (event) => {
    setIsUploadingIcon(true);
    const file = event.target.files[0];
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width === img.height) {
            setChatbotIcon(reader.result);
            setIsImagesChanged(true);
            localStorage.setItem('chatbot_icon', reader.result);
          } else {
            alert('Image must be square (height and width should be same, kindly crop to upload)');
          }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only images are allowed');
    }
    setIsUploadingIcon(false);
  };
  
  const handleLogoUpload = (event) => {
    setIsUploadingLogo(true);
    const file = event.target.files[0];
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width === img.height) {
            setChatbotLogo(reader.result);
            setIsImagesChanged(true);
            localStorage.setItem('chatbot_logo', reader.result);
          } else {
            alert('Image must be square (height and width should be same, kindly crop to upload)');
          }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only images are allowed');
    }
    setIsUploadingLogo(false);
  };
  

  // Function to handle color change for ColorPicker 1
  const handleColorChange1 = (selectedColor) => {
    setChatMessageColor(selectedColor.hex);
  };

  // Function to handle color change for ColorPicker 2
  const handleColorChange2 = (selectedColor) => {
    setUserMessageColor(selectedColor.hex);
  };

  // Function to handle edit button click
  const handleEditNameClick = () => {
    if (isNameEditable) {
      setName(editedName);
    }
    setIsNameEditable(!isNameEditable);
  };

  // Function to handle input change
  const handleNameInputChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleEditMessageClick = () => {
    if (isMessageEditable) {
      setWelcomeMessage(editedMessage);
    }
    setIsMessageEditable(!isMessageEditable);
  };

  // Function to handle input change
  const handleMessageInputChange = (event) => {
    setEditedMessage(event.target.value);
  };

  return (
    <div className="chat-customization">
      {/* Chatbot icon */}
      <div className="chatbot-icon">
        <img src={chatbotIcon} style={{ borderRadius: "50%" }} alt="Chatbot Icon" />
      </div>
      
      <button className="upload-icon-button" onClick={() => document.getElementById('icon-upload').click()}>
        {isUploadingIcon ? "Uploading..." : "Upload Icon"}
      </button>
      <input id="icon-upload" type="file" accept="image/*" onChange={handleIconUpload} style={{ display: 'none' }} />

      {/* CustomizeName div */}
      <div className="customize-name">
        {/* Label */}
        <div className="label"><b>Name</b></div>
        
        {/* Name input field and edit button */}
        <div className="name-edit">
          <input
            type="text"
            value={isNameEditable ? editedName : name}
            disabled={!isNameEditable}
            onChange={handleNameInputChange}
          />
          <button className='chatbot-edit-btn' onClick={handleEditNameClick}>{isNameEditable ? 'Save' : 'Edit'}</button>
        </div>
      </div>

      <div className="customize-message">
        {/* Label */}
        <div className="label"><b>Welcome Message</b></div>
        
        {/* Name input field and edit button */}
        <div className="message-edit">
          <input
            type="text"
            value={isMessageEditable ? editedMessage : welcomeMessage}
            disabled={!isMessageEditable}
            onChange={handleMessageInputChange}
          />
          <button className='chatbot-edit-btn' onClick={handleEditMessageClick}>{isMessageEditable ? 'Save' : 'Edit'}</button>
        </div>
      </div>

      <div className="chatbot-logo">
        <img src={chatbotLogo} style={{ borderRadius: "50%" }} alt="Chatbot Logo" />
      </div>

      {/* Upload icon button */}
      <button className="upload-logo-button" onClick={() => document.getElementById('logo-upload').click()}>
        {isUploadingLogo ? "Uploading" : "Upload Logo"}
      </button>
      <input id="logo-upload" type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: 'none' }} />


      <div className="customize-chatbot-message-color">
        <ColorPicker initialColor={chatMessageColor} labelText="Chatbot Message Color" onColorChange={handleColorChange1} />
        <ColorPicker initialColor={userMessageColor} labelText="User Message Color" onColorChange={handleColorChange2} />
      </div>
    </div>
  );
}


export default Chatbot;