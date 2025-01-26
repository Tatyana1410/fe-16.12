import React from 'react';
import HeaderIcon from './HeaderIcon';
import Searching from './Searching';
import logo from '../assets/netflix.png'



const Header = () => {
    
    const days = [
        "Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
        ];

    const today = new Date();
    const dayName = days[today.getDay()];     
    const monthName = months[today.getMonth()];
    const date = today.getDate();

    return (
        <>
            <header>
       <div className="right-head"> 
       <img src={logo} alt="logo-netflix"/>
            <div className="inline"> {dayName} {monthName} {date}th 
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