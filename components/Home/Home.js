import React, { useEffect, useState } from "react";
import router from "next/router";
import { postRequest, getRequest } from "../../utils/api";
import ChatbotItem from "./ChatbotItem";

const Home = ({ token }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Creating a new chatbot
const createNewChatbot = async () => {
  try {
    const response = await postRequest("/v1/chatbots/", {}, token);
    if (response.status === 'success'){
      localStorage.setItem('current_chatbot', JSON.stringify(response.results));
      router.push('/sources')
    }
    
  } catch (error) {
    console.error('Error creating new chatbot:', error);
  }
}


  //chatbot list after login
  useEffect(() => {
    const fetchChatbots = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (token) {
          const response = await getRequest("/v1/chatbots", token);
          if (response.status === "success") {
            setData(response.results);
          } else {
            setError("Error fetching chatbots");
          }
        }
      } catch (error) {
        setError("Error fetching chatbots");
      }

      setIsLoading(false);
    };

    fetchChatbots();
  }, [token]);

  return (
    <div className="home-container">
      <h1 className="heading">
        <b>Welcome To Our Chatbot</b>
      </h1>
      <p className="description">
        Welcome to our chatbot, your virtual assistant ready to help, inform,
        and engage with you on various topics!
      </p>
      <button onClick={createNewChatbot} className="create-button">
        Create New Chatbot
      </button>

      <div className="row" style={{ marginTop: "40px" }}>
        {data && data.length > 0 ? (
          <div className="col-lg-2 col-md-6 col-sm-6"></div>
        ) : null}
        {isLoading ? (
          <p>Loading ...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data && data.length > 0 ? (
          <div className="chatbot-list col-lg-8 col-md-6 col-sm-6">
            {data.map((chatbot) => (
              <ChatbotItem
                key={chatbot.chatbot_id}
                id={chatbot.chatbot_id}
                name={chatbot.bot_name}
                icon={chatbot.bot_picture}
              />
            ))}
          </div>
        ) : (
          <p>No chatbots available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
