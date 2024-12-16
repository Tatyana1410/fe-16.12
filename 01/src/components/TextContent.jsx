import React from 'react';

const TextContent = () => {
    return (
        <>
        <div className="text-content">
        <h4>Drama 
            {/* <i className="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;"></i> Thriller  
            <i className="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;"></i> Supernatural  */}
        </h4>
        <h1>Stranger Things</h1>
        <h2>2019 DIRECTOR: <span className="color">Shawn Levy</span> seasons: <span className="color">3 (5 Episodes)</span></h2>
        <p className="text-file"> In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
        <p className="size-star">
            {/* <span style="color:yellow;"> */}
            {/* <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i></span>
            <span style="color:white;">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i></span> */}
        </p>
        <button className="stream">STREAM NOW 
            <i className="fa-regular fa-circle-play"></i>
        </button>
        <button className="episodes">ALL EPISODES</button>
    </div>
            
        </>
    );
};

export default TextContent;