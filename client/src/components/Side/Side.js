import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation'
import Logo from '../../images/allstate-softball-logo.png';

const Side = (props) => {

    return (
      <div id="side" style={{ backgroundColor: '#2D2D2D', width: '230px', transition: '.15s ease-out'}}>
          <Navigation currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
      </div>
    );
  } 
  
  export default Side;