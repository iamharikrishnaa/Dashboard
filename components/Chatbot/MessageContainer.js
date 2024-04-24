import { useEffect, useRef } from 'react';
import Typography from "@mui/material/Typography";

const MessageContainer = ({ queries, responses, themeData }) => {
  const { bot_chat_color, user_chat_color } = themeData?.results || {};
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [queries, responses]);

  return (
    <div
      className="message-container"
      style={{ maxHeight: "417px", overflowY: "auto" }}
    >
      {queries.map((query, index) => (
        <div key={`query-${index}`}>
          <div className="bot-query">
            <div className="query" style={{ backgroundColor: user_chat_color }}>
              <Typography variant="body1" component="span" className="botmsg">
                {query}
              </Typography>
            </div>
          </div>
          {responses[index] && (
            <div className="bot-response">
              <div
                className="response"
                style={{ backgroundColor: bot_chat_color }}
              >
                <Typography variant="body1" component="span">
                  {responses[index]?.text}
                </Typography>
              </div>
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageContainer;
