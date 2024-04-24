import React, {useState, useEffect} from 'react';
import { Progress } from 'react-sweet-progress';
import CreateChatbot from "../ChatbotCustomization/CreateChatbot";
import Link from 'next/link';
    
const Website = () => {
  const [links, setLinks] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted links:", links);
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

  return (
    <div className="row">
        <div className="col-lg-8 col-sm-6 col-md-6">
          <WebsiteLoader setLinks={setLinks} isUploading={isUploading} uploadPercentage={uploadPercentage} />
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <CreateChatbot handleSubmit={handleSubmit} isUploading={isUploading} />
        </div>
    </div>
  );
}


const WebsiteLoader = ({setLinks, isUploading, uploadPercentage}) => {
  const [localLinks, setLocalLinks] = useState([]);

  // Function to handle file deletion
  const handleLinkDelete = (index) => {
    const updatedLinks = [...localLinks];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
    setLocalLinks(updatedLinks);
  };

  const handleDeleteAllLinks = () => {
    setLinks([]);
    setLocalLinks([]);
  };

  // Function to handle form submission
  const handleFetchLinks = () => {    
    setLinks(['www.google.com/link1', 'www.google.com/link2'])
    setLocalLinks(['www.google.com/link1', 'www.google.com/link2'])
  };


  return (
    <div className="file-loader">
      <h6><b>Upload Website URL</b> (Total Character 0/50000)</h6>
      <input
        className="URLInput"
        type="url"
        placeholder="www.google.com"
      />
      &nbsp;
      <button onClick={handleFetchLinks} style={{backgroundColor: "#85fe00", color: "#27293F"}}>Fetch Data</button>

      {/* Uploaded files list */}
      {isUploading ? <Progress percent={uploadPercentage} /> : null }
      <div className="files-list">
      <center><p>
        {localLinks.length > 0 ? '----------- Links Detected -----------' : 'Enter URL to continue'}
        </p></center>
        {localLinks.map((link, index) => (
          <div key={index} className="file-item">
            <span>{link}</span>
            <button onClick={() => handleLinkDelete(index)}><img src="/images/icons/delete.png" alt="delete" className="upload-icon" /></button>
          </div>
        ))}
      </div>

      <center><button className='delete_btn' onClick={handleDeleteAllLinks} >Delete All</button></center>
    </div>
  );
}

export default Website;