import React from 'react';
import Logo from '../../images/allstate-softball-logo.png';


const Header = (props) => {

    const getPageTitle = () => {
        switch(props.currentPage) {
            case 0:
                return 'News';
            case 1:
                return 'Schedule';
            case 2:
                return 'Stats';
            case 3:
                return 'Roster';
            case 4:
                return 'Box Score';
            default: return '';
        }
    }
    return (
      <div id="header" style={{ borderBottom: '1px solid #C4C4C4', width: '94%', height: '75px', display: 'flex', justifyContent: 'flex-start'}}>
        <img style={{ paddingTop: '5px' }} src={Logo} alt="Allstate-softball-logo" width="230px" height="80%" />
        <h1 style={{ marginLeft: '45px'}}>{getPageTitle()}</h1>
      </div>
    );
  }
  
  export default Header;