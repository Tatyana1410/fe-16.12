import React from 'react';
import { Link } from 'react-router-dom';



function TextPictures ({onSlidePrev,onSlideNext}){

       
    return (
        <>
        <div className="text-pict">
        <p className="popular"><Link className='linkEl' to="/main">POPULAR THIS WEEK </Link></p>
        <p className="next">
                <button className="next-film" onClick={onSlidePrev} >
                     <i className="fa-solid fa-circle-chevron-left"></i> 
                    </button>
                <button className="next-film" onClick={onSlideNext}>
                    <i className="fa-solid fa-circle-chevron-right"i/> 
                </button>
            </p>
    </div>
            
        </>
    );
};

export default TextPictures;