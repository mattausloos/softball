import React, { useState } from 'react';
import Content from './components/Content/Content';
import Side from './components/Side/Side';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="App" style={{ display: 'flex', flexDirection:'column', height: '100vh', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <Header currentPage={currentPage} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%'}}>
        <Side currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Content currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;

