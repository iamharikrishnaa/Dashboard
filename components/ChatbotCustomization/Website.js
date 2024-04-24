import React, {useState} from 'react';
import CreateChatbot from "./CreateChatbot";
import Link from 'next/link';
    
const Website = () => {

  const [files, setFiles] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  // Function to handle file deletion
  const handleFileDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement your submit logic here
    console.log("Submitted files:", files);
  };

  return (
    <div className="row">
        <div className="col-lg-8 col-sm-6 col-md-6">
          <WebsiteLoader />
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <CreateChatbot />
        </div>
    </div>
  );
}


const WebsiteLoader = () => {
  const [links, setLinks] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  // Function to handle file deletion
  const handleLinkDelete = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleDeleteAllLinks = () => {
    setLinks([]);
  };

  // Function to handle form submission
  const handleFetchLinks = () => {
    // Implement your submit logic here
    console.log("Fetched Links:", links);
    setLinks(['www.google.com/link1', 'www.google.com/link2'])
  };

  // Function to handle click event
  const handleClick = () => {
    document.getElementById('fileInput').click();
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
      <div className="files-list">
      <center><p>
        {links.length > 0 ? '----------- Links Detected -----------' : 'Enter URL to continue'}
        </p></center>
        {links.map((link, index) => (
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