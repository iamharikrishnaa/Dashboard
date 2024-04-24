import React, {useState} from 'react';

const CreateChatbot = ({ handleSubmit, isUploading }) => {
  const handleClick = () => {
    handleSubmit();
  };

  return (
    <>
      <h6 style={{ paddingTop: '16px' }}><b>Source</b></h6>
      <div className="source">
        <p style={{ textAlign: 'center' }}>Total detected characters upload <br /><b>0/50,000</b></p>
        <center>
          <button className='standard-btn' onClick={handleClick} disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Train Chatbot'}
          </button>
        </center>
      </div>
    </>
  );
}
 
export default CreateChatbot;