import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = (props) => {

    const [displaySearch, setDisplaySearch] = React.useState(false);

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
            default: return '';
        }
    }
    return (
      <div id="header" style={{ borderBottom: '1px solid #C4C4C4', width: '90%', margin: 'auto', height: '75px', display: 'flex', justifyContent: 'space-between'}}>
        {/* <h1 style={{ position: 'fixed', top: '10px', textAlign: 'left' }}>{getPageTitle()}</h1> */}
        <h1>{getPageTitle()}</h1>
        <div style={{ display: 'flex', margin: 'auto 0px'}}>
            <h3 onClick={() => setDisplaySearch(!displaySearch)} style={{ margin: 'auto 0px'}}>
            <IconContext.Provider value={{ color: "gray", size: '25px'}}>
                <AiOutlineSearch />
            </IconContext.Provider>
            </h3>
            <input type="text" placeholder="Search..." style={{ height: '25px', outline: 'none', borderRadius: '15px', border: '1px solid gray', padding: '4px 10px', fontSize: '14px', width: `${displaySearch ? '200px' : '0px'}`, transition: '.18s linear' , visibility: `${displaySearch ? 'visible' : 'hidden'}`, marginBottom: '5px'}} />
        </div>
      </div>
    );
  }
  
  export default Header;