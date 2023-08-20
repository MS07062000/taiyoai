import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './contactPage/contact';
import EditContact from './contactPage/editContact';
import AddContact from './contactPage/addContact';
import Sidebar from './Home/sidebar';
import Map from './chartsAndMapsPage/maps';
import LineChart from './chartsAndMapsPage/charts';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='flex justify-start items-center flex-nowrap flex-row bg-gray-900'>
          <Sidebar />
          <p className='text-white m-auto font-bold p-5'>Contact Management App</p>
        </div>
        <Routes>
          <Route path="/" element={<Contact/>} />
          <Route path="/createContact" element={<AddContact />} />
          <Route path="/editContact/:contactId/:contactInfo" element={<EditContact />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/chart" element={<LineChart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
