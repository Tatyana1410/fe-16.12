import React from 'react';
import HeaderIcon from './HeaderIcon';
import Searching from './Searching';
import logo from '../assets/netflix.png'



const Header = () => {
    
    const today = new Date();
    const day = today.getDay().toString();
    const month = (today.getMonth()+1).toString();
    const date = today.getDate();

    return (
        <>
            <header>
       <div className="right-head"> 
       <img src={logo} alt="logo-netflix"/>
            <div className="inline"> {day} {month} {date}th 
                 {/* Friday July 8th */}
                 </div>
        </div>
        <div className="left-head">
            <Searching></Searching>
            {/* <h6><i className="fa-solid fa-magnifying-glass fa-2xl"></i></h6> */}
            <HeaderIcon></HeaderIcon>
        </div>
    </header>
        </>
    );
};

export default Header;