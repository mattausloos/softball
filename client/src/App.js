import React, { useState } from 'react';
import Content from './components/Content/Content';
import Side from './components/Side/Side';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <div className="App" style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <Side currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

