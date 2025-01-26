import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';



function TextPictures ({onSlidePrev,onSlideNext}){

       
    return (
        <>
        <div className="text-pict">
        <p className="popular"><Link className='linkEl' to="/main">POPULAR THIS WEEK </Link></p>
        <p className="next">
                <button className="next-film" onClick={onSlidePrev} >
                     <FontAwesomeIcon icon={faChevronCircleLeft}/> 
                    </button>
                <button className="next-film" onClick={onSlideNext}>
                    <FontAwesomeIcon icon={faChevronCircleRight}/> 
                </button>
            </p>
    </div>
            
        </>
    );
};

export default TextPictures;