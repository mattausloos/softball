import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

const Navigation = (props) => {
    return (
      <div id="navigation" style={{ fontSize: '16px', fontWeight: '400', backgroundColor: '#4767B7', marginTop: '200px'}}>
          <NavigationLink text="News" currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} page={0} selected={props.currentPage === 0} />
          <NavigationLink text="Schedule" currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} page={1} selected={props.currentPage === 1}/>
          <NavigationLink text="Stats" currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} page={2} selected={props.currentPage === 2}/>
          <NavigationLink text="Roster" currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} page={3} selected={props.currentPage === 3}/>
      </div>
    );
  }
  
  export default Navigation;