import React from 'react';
import Films from './Films';
import TitleElemet from './TitleElemet';
import Buttons from './Buttons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';




const TextContent = () => {
    return (
        <>
        <div className="text-content">
        <h4>
            <Films></Films>
            {/* Drama  */}
            {/* <i className="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;"></i>  */}
            {/* Thriller   */}
            {/* <i className="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;"></i>  */}
            {/* Supernatural  */}
        </h4>
        <TitleElemet title = 'Stranger Things'></TitleElemet>
        <h2>2019 DIRECTOR: <span className="color">Shawn Levy  </span>     seasons: <span className="color">3 (5 Episodes)</span></h2>
        <p className="text-file"> 
        'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.'</p>
        
        <p className="size-star">
            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}/>
        </p>
        <Buttons></Buttons>
        
    </div>
            
        </>
    );
};

export default TextContent;