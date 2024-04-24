import React, {useState} from 'react';
    
const Text = () => {
  const [text, setText] = useState(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chatbot</title>
      <link
        rel="stylesheet"
        href="http://192.168.1.44:8081/index.718dbbcd.css"
      />
    </head>
    <body>
      <div id="root"></div>
      <script
        type="module"
        src="http://192.168.1.44:8081/index.b5caaee8.js"
        userId="deea696a-593c-411a-aa06-d5b906e34402"
        defer
      ></script>
    </body>
  </html>`);

  // Function to handle textarea change
  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Ensure maximum character limit
    if (inputValue.length <= 50000) {
      setText(inputValue);
    }
  };

  return (
          <div className="file-loader">
            <h6><b>Embed On Site </b></h6>
            <div className="code-area">
              <textarea
                placeholder=""
                disabled={true}
                value={text}
                className="textarea"
              ></textarea>
            </div>
            {/* <div className="drag-drop-area">
              <input
                id="fileInput"
                type="text"
                style={{ display: 'none' }}
              />
            </div> */}
          </div>
  );
}


export default Text;