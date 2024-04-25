import React, {useState, useRef, useEffect} from 'react';
import ChatbotWindow from "../components/ChatbotCustomization/ChatbotWindow";
import Navbar from '../components/_App/Navbar';
import Sidebar from '../components/ChatbotCustomization/Sidebar';
import Chatbot from '../components/ChatbotCustomization/Chatbot';
import HistoryTable from '../components/ChatbotCustomization/HistoryTable';
import EmbedOnSite from '../components/ChatbotCustomization/EmbedOnSite';
import Database from '../components/ChatbotCustomization/Database';
import FloatingButton from "../components/Chatbot/FloatingButton";


const Index = () => {
    const [selectedItem, setSelectedItem] = useState('chatbot');
    const [isChatbotWindowOpen, setIsChatbotWindowOpen] = useState(true);
    const [isImagesChanged, setIsImagesChanged] = useState(false);
    


    const handleItemClick = (itemNumber) => {
        setSelectedItem(itemNumber);
    }
  
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-lg-2 col-sm-6 col-md-6">
                    <Sidebar onItemClick={handleItemClick} />
                </div>
                {selectedItem && selectedItem!='embed' && (
                    <>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="home-container" style={{paddingTop: "20px", paddingBottom: "50px"}}>

                            </div>
                            {selectedItem=='chatbot' && (
                                <Chatbot setIsImagesChanged={setIsImagesChanged}/>
                            )}
                            {selectedItem=='history' && (
                                <HistoryTable />
                            )}
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="widget">
                            <div className="widget-button">
                                <FloatingButton id={'chatbot_id'} isImagesChanged={isImagesChanged} setIsImagesChanged={setIsImagesChanged} />
                            </div>
                        </div>
                            {/* <ChatbotWindow isChatbotWindowOpen={isChatbotWindowOpen} setIsChatbotWindowOpen ={setIsChatbotWindowOpen } /> */}
                        </div>
                    </>
                )}
                {selectedItem && selectedItem=='embed' && (
                    <div className="col-lg-8 col-sm-6 col-md-6">
                        <div className="home-container" style={{paddingTop: "20px", paddingBottom: "50px"}}></div>
                        <EmbedOnSite />
                    </div>
                )}
            </div>

        </>
    )
}

export default Index;