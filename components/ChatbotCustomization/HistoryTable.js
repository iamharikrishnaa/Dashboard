import React, { useState, useEffect } from 'react';

const HistoryTable = () => {
  const [chatbots, setChatbots] = useState([
    {
        "id": 1,
        "name": "user_1_chatbot_1",
        "chatbot_id": "74cc7317-fa75-429c-9f23-c73923b48a91",
        "created_at": "2024-04-18T09:31:52.638552Z",
        "updated_at": "2024-04-18T09:31:52.638552Z",
        "user": 2
    },
    {
        "id": 2,
        "name": "user_1_chatbot_2",
        "chatbot_id": "1b0a0770-e1fc-49d8-9de4-920d67f4dc89",
        "created_at": "2024-04-18T09:32:34.482962Z",
        "updated_at": "2024-04-18T09:32:34.482962Z",
        "user": 2
    },
]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('your_api_endpoint_here');
        const data = await response.json();
        setChatbots(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData();
  }, []);

  return (
    <div className="history-table">
      <table>
        <thead>
          <tr>
            <th style={{ width: '64px' }}>ID</th>
            <th>Name</th>
            <th>Date Time</th>
          </tr>
        </thead>
        <tbody>
          {chatbots.map(chatbot => (
            <tr key={chatbot.id}>
              <td>{chatbot.id}</td>
              <td><button className=''>{chatbot.name}</button></td>
              <td>{new Date(chatbot.created_at).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        <button className="prev standard-btn">Previous</button>
        <div className="page-numbers">
          <button className='active-page standard-btn page-number'><span>1</span></button>
          <button className='standard-btn page-number'><span>2</span></button>
          {/* Add more page numbers */}
        </div>
        <button className="next standard-btn">Next</button>
      </div>
    </div>
  );
};

export default HistoryTable;
