import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation'
import Logo from '../../images/allstate-softball-logo.png';
// import { useState, useEffect } from 'react';

const Side = (props) => {
//   const [containerHeight, setContainerHeight] = useState('100vh')

//   useEffect(() => {
//     setContainerHeight('0vh');
//   }, []);

const [navigationCollapsed, setNavigationCollapsed] = useState(false);



    return (
      <div id="side" style={{ backgroundColor: '#2D2D2D', width: '230px', display: 'flex', transition: '.15s ease-out', flexDirection: 'column'}}>
          <img src={Logo} alt="Allstate-softball-logo" width="100%" height="75px" style={{ margin: '0px 0px 200px 0px'}} />

          <Navigation currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
          {/* <button onClick={() => setNavigationCollapsed(!navigationCollapsed)}>Click</button> */}
      </div>
    );
  } 
  
  export default Side;