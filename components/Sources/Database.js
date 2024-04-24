import React, {useState} from 'react';
import CreateChatbot from "../ChatbotCustomization/CreateChatbot";
import Link from 'next/link';
    
const Database = () => {

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
        <div className="file-loader">
          <h6><b>Link Databases</b></h6>
          <div className="database-area">
            <input
              id="fileInput"
              type="file"
              multiple
              style={{ display: 'none' }}
            />
            <img src='/images/soon.png' style={{width: '180px', height: '180px'}} />
            <h2>Coming Soon</h2>
            <p className='description'>Are you Ready to get something new from us. Then subscribe the <br></br> news latter to get latest updates?</p>
          </div>

        </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <CreateChatbot />
        </div>
    </div>
  );
}

export default Database;