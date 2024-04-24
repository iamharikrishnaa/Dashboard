import React, {useState} from 'react';
import CreateChatbot from "./CreateChatbot";
import Link from 'next/link';
    
const Text = () => {
  const [text, setText] = useState('');

  // Function to handle textarea change
  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Ensure maximum character limit
    if (inputValue.length <= 50000) {
      setText(inputValue);
    }
  };

  return (
    <div className="row">
        <div className="col-lg-8 col-sm-6 col-md-6">
          <div className="file-loader">
            <h6><b>Write Text/Paragraph </b>(Total Character {text.length}/50000)</h6>
            <div className="text-input">
              <textarea
                placeholder="Please Write Your Data...."
                value={text}
                onChange={handleChange}
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
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <CreateChatbot />
        </div>
    </div>
  );
}


export default Text;