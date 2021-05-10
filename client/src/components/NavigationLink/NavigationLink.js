import React from 'react';
import './NavigationLink.css';

const NavigationLink = (props) => {
    return (
      <div className="navigation-link" onClick={() =>  {
          if (props.currentPage !== props.page){
            props.setCurrentPage(props.page)
          } 
          }} style={{ backgroundColor: `${props.selected ? '#4767B7' : '#111111'}`, color: 'white', textAlign: 'left', cursor: 'pointer' }}>
          {props.text}
          {/* #788095 */}
          {/* backgroundColor: `${props.selected ? '#4767B7' : 'black'}` */}
      </div>
    );
  }
  
  export default NavigationLink;