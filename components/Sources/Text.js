import React, {useState, useEffect} from 'react';
import { Progress } from 'react-sweet-progress';
import CreateChatbot from "../ChatbotCustomization/CreateChatbot";
import Link from 'next/link';
    
const Text = () => {
  const [text, setText] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted text:", text);
    setUploadPercentage(0);
    setIsUploading(true);
  };

  useEffect(() => {
    if (isUploading) {
      const intervalId = setInterval(() => {
        setUploadPercentage(prevPercentage => {
          if (prevPercentage < 100) {
            return prevPercentage + 20;
          } else {
            clearInterval(intervalId);
            setIsUploading(false);
            return prevPercentage;
          }
        });
      }, 1000);

      // Cleanup function
      return () => clearInterval(intervalId);
    }
  }, [isUploading]); // Add files as a dependency

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
            {isUploading ? <Progress percent={uploadPercentage} /> : null }
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
          <CreateChatbot handleSubmit={handleSubmit} isUploading={isUploading} />
        </div>
    </div>
  );
}


export default Text;