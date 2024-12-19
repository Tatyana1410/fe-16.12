import React from 'react';
import PropTypes from 'prop-types';

const callHello = ()=>{
    alert('Hello');
}


function Buttons(props) {
    return (
        <>
        <button className="stream">STREAM NOW 
            <i className="fa-regular fa-circle-play"></i>
        </button>
        <button onClick ={callHello} className="episodes">ALL EPISODES</button>
            
        </>
    );
}

export default Buttons;