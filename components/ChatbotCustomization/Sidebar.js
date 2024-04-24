import React, {useState} from 'react';
import router from 'next/router';

const Sidebar = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState('chatbot');

  const handleItemClick = (itemNumber) => {
    onItemClick(itemNumber);
    setActiveItem(itemNumber);
    if (itemNumber === 'source'){
      router.push('/sources')
    }
  }

  return (
    <div className="sidebar">
      {/* Project Div */}
      <div className="project">
        {/* Section Div */}
        <div className="section">
          {/* Items */}
          <div className={`item ${activeItem === 'chatbot' ? 'active' : ''}`} onClick={() => handleItemClick('chatbot')}><img src='/images/icons/files.png' style={{paddingRight: "20px"}}></img>Settings</div>
          <div className={`item ${activeItem === 'history' ? 'active' : ''}`} onClick={() => handleItemClick('history')}><img src='/images/icons/text.png' style={{paddingRight: "20px"}}></img>Chat History</div>
          <div className={`item ${activeItem === 'embed' ? 'active' : ''}`} onClick={() => handleItemClick('embed')}><img src='/images/icons/website.png' style={{paddingRight: "20px"}}></img>Embed On Site</div>
          <div className={`item ${activeItem === 'source' ? 'active' : ''}`} onClick={() => handleItemClick('source')}><img src='/images/icons/database.png' style={{paddingRight: "20px"}}></img>Back to Sources</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;