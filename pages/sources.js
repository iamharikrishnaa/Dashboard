import React, {useState} from 'react';
import Navbar from '../components/_App/Navbar';
import Sidebar from '../components/_App/Sidebar';
import Files from '../components/Sources/Files';
import Text from '../components/Sources/Text';
import Website from '../components/Sources/Website';
import Database from '../components/Sources/Database';

const Index = () => {
    const [selectedItem, setSelectedItem] = useState('files');

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
                <div className="col-lg-10 col-sm-6 col-md-6">
                    <div className="home-container" style={{paddingTop: "100px", paddingBottom: "50px"}}>
                        {/* Heading */}
                        <h1 className="heading"><b>Data Sources</b></h1>
                        
                        {/* Description */}
                        <p className="description">
                            Include your data sources for chatbot training to ensure transparency,<br></br>
                            utilizing a variety of text corpora, websites, and licensed datasets.
                        </p>

                    </div>
                    {selectedItem && selectedItem=='files' && (
                        <Files />
                    )}
                    {selectedItem && selectedItem=='text' && (
                        <Text />
                    )}
                    {selectedItem && selectedItem=='website' && (
                        <Website />
                    )}
                    {selectedItem && selectedItem=='database' && (
                        <Database />
                    )}
                </div>
            </div>

        </>
    )
}

export default Index;