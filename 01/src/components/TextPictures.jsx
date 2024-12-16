import React from 'react';

const TextPictures = () => {
    return (
        <>
        <div className="text-pict">
        <p className="popular">POPULAR THIS WEEK</p>
        <p className="next">
            <button className="next-film"><i className="fa-solid fa-circle-chevron-left"></i> </button>
            <button className="next-film"><i className="fa-solid fa-circle-chevron-right"></i>
            </button>
        </p>
    </div>
            
        </>
    );
};

export default TextPictures;