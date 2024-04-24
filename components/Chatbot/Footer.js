import { useState } from "react";
import { Send } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ onSubmit, themeData }) => {
  const { bot_chat_color } = themeData?.results || {};
  const [message, setMessage] = useState("");

  const summitMessage = (event) => {
    event.preventDefault();
    if (!message) {
      alert("Question cannot be empty");
      return; // Exit the function if message is empty
    }
    onSubmit(message); // Send the message to the parent component
    setMessage(""); // Clear input after sending
  };

  return (
    <form onSubmit={summitMessage}>
      <div className="footer">
        <div style={{ marginTop: 10 }}>
          <div
            className="text-field"
            style={{ backgroundColor: bot_chat_color }}
          >
            <TextField
              placeholder="Please type your question here."
              variant="standard"
              fullWidth
              style={{
                height: 42,
                justifyContent: "center",
                borderRadius: 23,
                backgroundColor: bot_chat_color,
              }}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  summitMessage(event); // Pass event to summitMessage function
                }
              }}
              autoFocus={false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="hover-effect">
                    <Send
                      onClick={summitMessage}
                      style={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </div>
        </div>
        <div className="footer-statement">
          <div className="powered-by">Powered By</div>
          <div className="novagito-logo">
            <img
              className="novagito-image"
              src='/images/ChatNovagito.png'
              alt="Novagito"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

// PropTypes validation
Footer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  themeData: PropTypes.func.isRequired,
};

export default Footer;
