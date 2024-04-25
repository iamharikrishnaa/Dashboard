import React, { useState, useRef, useEffect } from "react";
import ChatbotWindow from "./ChatbotWindow";
import ColorPicker from "./ColorPicker";
import { patchRequest } from "../../utils/api";

const Chatbot = ({ setIsImagesChanged }) => {
  const [isChatbotWindowOpen, setIsChatbotWindowOpen] = useState(true);
  const [chatbotData, setChatbotData] = useState({});

  useEffect(() => {
    const chatDatas = localStorage.getItem("current_chatbot");
    setChatbotData(JSON.parse(chatDatas));
  }, []);
  return (
    <ChatCustomization
      setIsImagesChanged={setIsImagesChanged}
      chatData={chatbotData}
    />
  );
};

const ChatCustomization = ({ setIsImagesChanged, chatData }) => {
  const [name, setName] = useState(chatData.name);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [welcomeMessage, setWelcomeMessage] = useState(
    chatData.bot_welcome_message
  );
  const [isMessageEditable, setIsMessageEditable] = useState(false);
  const [editedMessage, setEditedMessage] = useState();
  const [chatMessageColor, setChatMessageColor] = useState("#000"); // Initial color state for ColorPicker 1
  const [userMessageColor, setUserMessageColor] = useState("#FFF"); // Initial color state for ColorPicker 2
  const [chatbotIcon, setChatbotIcon] = useState(chatData.popup_picture);
  const [chatbotLogo, setChatbotLogo] = useState(chatData.bot_picture);
  const [isUploadingIcon, setIsUploadingIcon] = useState(false);
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [chatBotToken, setChatBotToken] = useState('');

  // const handleIconUpload = (event) => {
  //   setIsUploadingIcon(true);
  //   const file = event.target.files[0];

  //   if (file.type.startsWith('image/')) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const img = new Image();
  //       img.onload = () => {
  //         if (img.width === img.height) {
  //           setChatbotIcon(reader.result);
  //           setIsImagesChanged(true);
  //           localStorage.setItem('chatbot_icon', reader.result);
  //         } else {
  //           alert('Image must be square (height and width should be same, kindly crop to upload)');
  //         }
  //       };
  //       img.src = reader.result;
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     alert('Only images are allowed');
  //   }
  //   setIsUploadingIcon(false);
  // };
  const handleIconUpload = (event) => {
    setIsUploadingIcon(true);
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        // Code to handle image loading and validation
        console.log("File loaded successfully!");
        const uploadedIcon = reader.result; // Get the uploaded icon data
        setChatbotIcon(uploadedIcon); // Set the chatbotIcon state with the uploaded icon data
        setIsImagesChanged(true);
        localStorage.setItem("chatbot_icon", uploadedIcon);
        setIsUploadingIcon(false);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
      setIsUploadingIcon(false);
    }
  };
  const handleLogoUpload = (event) => {
    setIsUploadingLogo(true);
    const file = event.target.files[0];
    console.log(file, "file");
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width === img.height) {
            setChatbotLogo(reader.result);
            setIsImagesChanged(true);
            localStorage.setItem("chatbot_logo", reader.result);
          } else {
            alert(
              "Image must be square (height and width should be same, kindly crop to upload)"
            );
          }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only images are allowed");
    }
    setIsUploadingLogo(false);
  };

  // Function to handle color change for ColorPicker 1
  const handleColorChange1 = (selectedColor) => {
    setChatMessageColor(selectedColor.hex);
    localStorage.setItem("chatbotColor", selectedColor.hex);
  };

  // Function to handle color change for ColorPicker 2
  const handleColorChange2 = (selectedColor) => {
    setUserMessageColor(selectedColor.hex);
    localStorage.setItem("chatuserColor", selectedColor.hex);
  };

  // Function to handle edit button click

    const handleNameInputChange = (event) => {
    setEditedName(event.target.value);
  };
  
  const handleEditNameClick = () => {
    if (isNameEditable) {
      setName(editedName);
    }
    setIsNameEditable(!isNameEditable);
  };

  // Function to handle input change

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

  useEffect(() => {
    const chatToken = localStorage.getItem('token')
    setChatBotToken(chatToken);
  }, [])

  const handleSave = async () => {
    const payload = {
      bot_name: editedName, // Use the editedName state variable for bot name
      bot_welcome_message: editedMessage, // Use the editedMessage state variable for welcome message
      bot_chat_color: chatMessageColor, // Use the chatMessageColor state variable for chatbot message color
      user_chat_color: userMessageColor, // Use the userMessageColor state variable for user message color
      popup_picture: chatbotIcon, // Use the chatbotIcon state variable for chatbot icon
      bot_picture: chatbotLogo, // Use the chatbotLogo state variable for chatbot logo
      // Add any additional fields as needed
    };

    try {
      const response = await patchRequest("/v1/chatbots/", payload, chatBotToken, chatData?.chatbot_id);
      if (response.status === "success") {
        localStorage.setItem(
          "current_chatbot",
          JSON.stringify(response.results)
        );
        alert("successfully submitted")
      }
    } catch (error) {
      console.error("Error saving the chatbot data:", error);
    }
  };

  return (
    <div className="chat-customization">
      {/* Chatbot icon */}
      <div className="chatbot-icon">
        <img
          src={chatbotIcon}
          style={{ borderRadius: "50%" }}
          alt="Chatbot Icon"
        />
      </div>
      <button
        className="upload-icon-button"
        onClick={() => document.getElementById("icon-upload").click()}
      >
        {isUploadingIcon ? "Uploading..." : "Upload Icon"}
      </button>
      <input
        id="icon-upload"
        type="file"
        accept="image/*"
        onChange={handleIconUpload}
        style={{ display: "none" }}
      />

      {/* CustomizeName div */}
      <div className="customize-name">
        {/* Label */}
        <div className="label">
          <b>Name</b>
        </div>

        {/* Name input field and edit button */}
        <div className="name-edit">
          <input
            type="text"
            value={isNameEditable ? editedName : chatData?.bot_name}
            disabled={!isNameEditable}
            onChange={handleNameInputChange}
          />
          <button className="chatbot-edit-btn" onClick={handleEditNameClick}>
            {isNameEditable ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="customize-message">
        {/* Label */}
        <div className="label">
          <b>Welcome Message</b>
        </div>

        {/* Name input field and edit button */}
        <div className="message-edit">
          <input
            type="text"
            value={
              isMessageEditable ? editedMessage : chatData?.bot_welcome_message
            }
            disabled={!isMessageEditable}
            onChange={handleMessageInputChange}
          />
          <button className="chatbot-edit-btn" onClick={handleEditMessageClick}>
            {isMessageEditable ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="chatbot-logo">
        <img
          src={chatbotLogo}
          style={{ borderRadius: "50%" }}
          alt="Chatbot Logo"
        />
      </div>

      {/* Upload icon button */}
      <button
        className="upload-logo-button"
        onClick={() => document.getElementById("logo-upload").click()}
      >
        {isUploadingLogo ? "Uploading" : "Upload Logo"}
      </button>
      <input
        id="logo-upload"
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        style={{ display: "none" }}
      />

      <div className="customize-chatbot-message-color">
        <ColorPicker
          initialColor={
            chatMessageColor ? chatMessageColor : chatData.bot_chat_color
          }
          labelText="Chatbot Message Color"
          onColorChange={handleColorChange1}
        />
        <ColorPicker
          initialColor={
            userMessageColor ? userMessageColor : chatData.user_chat_color
          }
          labelText="User Message Color"
          onColorChange={handleColorChange2}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Chatbot;
