import React from 'react';
import HeaderIcon from './HeaderIcon';

const Header = () => {
    const NowYear = new Date().toDateString();
    return (
        <>
            <header>
       <div className="right-head"> 
            {/* <img src={logo} alt="logo-netflix" /> */}
            <div className="inline"> {NowYear} Friday July 8th</div>
        </div>
        <div className="left-head">
            <h6><i className="fa-solid fa-magnifying-glass fa-2xl"></i></h6>
            <HeaderIcon></HeaderIcon>
            {/* <img src={foto} alt="foto"> */}
        </div>
    </header>
        </>
    );
};

export default Header;