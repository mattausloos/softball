import React from 'react';
import Header from '../Header/Header';
import Page from '../Page/Page';

const Content = (props) => {
    return (
      <div id="Content" style={{ backgroundColor: 'white', width: '85%'}}>
          <Page currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}/>
      </div>
    );
  }
  
  export default Content;