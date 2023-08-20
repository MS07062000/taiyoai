import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('contacts');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
    };

    return (
        isSidebarOpen ? (
            <div style={{zIndex:9999}} className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${isSidebarOpen ? '' : 'hidden'}`}>
                <div className="text-gray-100 text-xl">
                    <h1 className="font-bold text-gray-200 text-[15px] ml-3" onClick={toggleSidebar}>X</h1>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <Link to="/" >
                    <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${activeSection === 'contacts' ? 'bg-blue-600' : ''}`} onClick={() => handleSectionClick('contacts')}>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Contacts</span>
                    </div>
                </Link>
                <Link to="/map">
                    <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${activeSection === 'map' ? 'bg-blue-600' : ''}`} onClick={() => handleSectionClick('map')}>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Map</span>
                    </div>
                </Link>
                <Link to="/chart">
                    <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${activeSection === 'chart' ? 'bg-blue-600' : ''}`} onClick={() => handleSectionClick('chart')}>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Chart</span>
                    </div>
                </Link>
            </div>) : (
            <span className="bi bi-list text-white text-4xl cursor-pointer ml-3" onClick={toggleSidebar}></span>
        )
    );
};

export default Sidebar;
