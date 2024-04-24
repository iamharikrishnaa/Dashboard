import React, {useState} from 'react';
import router from 'next/router';

const Sidebar = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState('files');

  const handleItemClick = (itemNumber) => {
    onItemClick(itemNumber);
    setActiveItem(itemNumber);
    if (itemNumber === 'chatbot'){
      router.push('/chatbot')
    }
  }

  return (
    <div className="sidebar">
      {/* Project Div */}
      <div className="project">
        {/* Section Div */}
        <div className="section">
          {/* Items */}
          <div className={`item ${activeItem === 'files' ? 'active' : ''}`} onClick={() => handleItemClick('files')}><img src='/images/icons/files.png' style={{paddingRight: "20px"}}></img>Files</div>
          <div className={`item ${activeItem === 'text' ? 'active' : ''}`} onClick={() => handleItemClick('text')}><img src='/images/icons/text.png' style={{paddingRight: "20px"}}></img>Text</div>
          <div className={`item ${activeItem === 'website' ? 'active' : ''}`} onClick={() => handleItemClick('website')}><img src='/images/icons/website.png' style={{paddingRight: "20px"}}></img>Website</div>
          <div className={`item ${activeItem === 'database' ? 'active' : ''}`} onClick={() => handleItemClick('database')}><img src='/images/icons/database.png' style={{paddingRight: "20px"}}></img>Database</div>
          <div className={`item ${activeItem === 'chatbot' ? 'active' : ''}`} onClick={() => handleItemClick('chatbot')}><img src='/images/icons/files.png' style={{paddingRight: "20px"}}></img>Go to Chatbot</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;