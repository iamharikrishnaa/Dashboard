import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Header from "./Header";
import MessageContainer from "./MessageContainer";
import Footer from "./Footer";
import PropTypes from "prop-types"; // Import PropTypes

const Responses = [
  {
    text: "You can track your order by logging into your account and going to the 'Order History' section.",
  },
  {
    text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details.",
  },
  {
    text: "You can track your order by logging into your account and going to the 'Order History' section.",
  },
  {
    text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details.",
  },
  {
    text: "You can track your order by logging into your account and going to the 'Order History' section.",
  },
  {
    text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details.",
  },
  {
    text: "You can track your order by logging into your account and going to the 'Order History' section.",
  },
  {
    text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details.",
  },
  {
    text: "You can track your order by logging into your account and going to the 'Order History' section.",
  },
  {
    text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details.",
  },
]
       

const Container = ({ isOpen, onClose,themeData, storedIcon }) => {
  console.log(themeData,'theeme')
  const [queries, setQueries] = useState([]);
  const [responses, setResponses] = useState(Responses);
  const [chatBotColor, setChatBotColor] = useState('');
  const [chatUserColor, setChatUserColor] = useState('');
  const [botName, setBotName] = useState('');

useEffect(() => {
  if (typeof window !== 'undefined') {
    const botColor = localStorage.getItem('chatbotColor');
    if (botColor) {
      setChatBotColor(botColor);
    }
  }
}, [typeof window !== 'undefined' && localStorage.getItem('chatbotColor')]);

useEffect(() => {
  if (typeof window !== 'undefined') {
    const userColor = localStorage.getItem('chatuserColor');
    if (userColor) {
      setChatUserColor(userColor);
    }
  }
}, [typeof window !== 'undefined' && localStorage.getItem('chatuserColor')]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const botData = localStorage.getItem('current_chatbot');
    if(botData) {
      setBotName(JSON.parse(botData)?.bot_name);
    }
    }
  }, [typeof window !== 'undefined' && localStorage.getItem('botData')])

  //Function to add a new query
  const addQueryAndResponse = (query, response) => {
    setQueries([...queries, query]);
    setResponses([...responses, response]);
    //update local storage with the new queries array
    localStorage.setItem("queries", JSON.stringify([...queries, query]));
    localStorage.setItem("responses", JSON.stringify([...responses, response]));
  };
  const Reset = () => {
    localStorage.removeItem("queries");
    localStorage.removeItem("responses");
    setQueries([]);
    setResponses([]);
  };
  useEffect(() => {
    const storedQueries = localStorage.getItem("queries");
    if (storedQueries) {
      setQueries(JSON.parse(storedQueries));
    }
    const storedResponses = localStorage.getItem("responses");
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, [storedIcon]);

  return (
    <div>
      {isOpen && (
        <Card variant="outlined" className="card" sx={{ borderRadius: 2 }}>
          <Header onClose={onClose} reset={Reset} themeData={themeData} storedIcon={storedIcon} botName={botName} />
          <MessageContainer
            queries={queries}
            responses={responses}
            themeData={themeData}
            chatUserColor={chatUserColor}
            chatBotColor={chatBotColor}
          />
          <Footer onSubmit={addQueryAndResponse} themeData={themeData} />
        </Card>
      )}
    </div>
  );
};
//prop type validation
Container.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  themeData: PropTypes.func.isRequired,
};

export default Container;
