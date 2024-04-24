import React, { useState, useEffect } from 'react';
import { Progress } from 'react-sweet-progress';
import CreateChatbot from "../ChatbotCustomization/CreateChatbot";


const Files = () => {
  const [files, setFiles] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted files:", files);
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
  }, [isUploading, files]); // Add files as a dependency

  return (
    <div className="row">
      <div className="col-lg-8 col-sm-6 col-md-6">
        <FileLoader setFiles={setFiles} isUploading={isUploading} uploadPercentage={uploadPercentage} />
      </div>
      <div className="col-lg-3 col-sm-6 col-md-6">
        <CreateChatbot handleSubmit={handleSubmit} isUploading={isUploading} />
      </div>
    </div>
  );
};

const FileLoader = ({ setFiles, isUploading, uploadPercentage }) => {
  const [files, setLocalFiles] = useState([]);

  useEffect(() => {
    if (uploadPercentage === 100) {
      setFiles([]);
      setLocalFiles([])
    }
  }, [uploadPercentage]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setLocalFiles([...files, ...uploadedFiles]);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleFileDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setLocalFiles(updatedFiles);
    setFiles(updatedFiles);
  };

  const handleAllFileDelete = () => {
    setLocalFiles([]);
    setFiles([]);
  };

  // Function to handle click event
  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="file-loader">
      <h6><b>Upload File</b></h6>
      <div className="drag-drop-area" onClick={handleClick}>
        <input
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <img src="/images/icons/upload.png" alt="Upload" className="upload-icon" />
        <p>Browse And Choose The Files You Want To Upload From Your Computer</p>
        <button className='plus-btn'>+</button>
      </div>
      {/* Show progress percentage bar here  */}
      {isUploading ? <Progress percent={uploadPercentage} /> : null }


      {/* Uploaded files list */}
      <div className="files-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <button onClick={() => handleFileDelete(index)}><img src="/images/icons/delete.png" alt="Upload" className="upload-icon" /></button>
          </div>
        ))}
      </div>

      <center><button className='delete_btn' onClick={handleAllFileDelete} >Delete All</button></center>
    </div>
  );
}

export default Files;
