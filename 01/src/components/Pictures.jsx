import React from 'react';
import film1 from '../assets/Rectangle 11.png';
import film2 from '../assets/Rectangle 6.png';
import film3 from '../assets/Rectangle 7.png';
import film4 from '../assets/Rectangle 8.png';
import film5 from '../assets/Rectangle 9.png';

const Pictures = () => {
    return (
        <>
            <div className="pictures-film"> 
                <img src={film1} alt="film" />
                <img src={film2} alt="film"/>
                <img src={film3} alt="film" />
                <img src={film4} alt="film" />
                <img src={film5} alt="film" />
            </div>
            
        </>
    );
};

export default Pictures;